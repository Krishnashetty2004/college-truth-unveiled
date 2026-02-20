import { useState, useCallback, useRef, useEffect } from 'react';
import { isRateLimited, getRemainingRequests, getResetTime, detectBot, sanitizeInput } from '@/lib/rateLimiter';
import { supabase } from '@/integrations/supabase/client';

interface UseRateLimitedActionOptions {
  action: string; // 'review', 'story', 'comment', etc.
  onRateLimited?: () => void;
  onBotDetected?: () => void;
}

interface UseRateLimitedActionReturn<T> {
  execute: (fn: () => Promise<T>) => Promise<T | null>;
  isLoading: boolean;
  isRateLimited: boolean;
  remainingRequests: number;
  resetTimeSeconds: number;
  formStartTime: number; // Track when form was opened (for bot detection)
  error: string | null;
}

export function useRateLimitedAction<T = any>(
  options: UseRateLimitedActionOptions
): UseRateLimitedActionReturn<T> {
  const { action, onRateLimited, onBotDetected } = options;

  const [isLoading, setIsLoading] = useState(false);
  const [rateLimited, setRateLimited] = useState(false);
  const [remainingRequests, setRemainingRequests] = useState(0);
  const [resetTimeSeconds, setResetTimeSeconds] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | undefined>();

  // Track when form was opened (for bot detection)
  const formStartTime = useRef(Date.now()).current;

  // Get user ID
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUserId(data.user?.id);
      setRemainingRequests(getRemainingRequests(action, data.user?.id));
    });
  }, [action]);

  // Update remaining requests periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingRequests(getRemainingRequests(action, userId));
      setResetTimeSeconds(getResetTime(action, userId));

      // Reset rate limited status if time has passed
      if (rateLimited && getResetTime(action, userId) === 0) {
        setRateLimited(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [action, userId, rateLimited]);

  const execute = useCallback(
    async (fn: () => Promise<T>): Promise<T | null> => {
      setError(null);

      // Check for bot behavior
      const submissionTime = Date.now() - formStartTime;
      if (detectBot({ submissionTime })) {
        console.warn('Bot behavior detected');
        onBotDetected?.();
        setError('Please slow down and try again.');
        return null;
      }

      // Check rate limit
      if (isRateLimited(action, userId)) {
        setRateLimited(true);
        setResetTimeSeconds(getResetTime(action, userId));
        onRateLimited?.();
        setError(`Too many requests. Please wait ${getResetTime(action, userId)} seconds.`);
        return null;
      }

      // Execute the action
      setIsLoading(true);
      try {
        const result = await fn();
        setRemainingRequests(getRemainingRequests(action, userId));
        return result;
      } catch (err) {
        const message = err instanceof Error ? err.message : 'An error occurred';
        setError(message);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [action, userId, formStartTime, onRateLimited, onBotDetected]
  );

  return {
    execute,
    isLoading,
    isRateLimited: rateLimited,
    remainingRequests,
    resetTimeSeconds,
    formStartTime,
    error,
  };
}

/**
 * Hook for tracking form start time (bot detection)
 */
export function useFormStartTime(): number {
  const startTime = useRef(Date.now());
  return startTime.current;
}

/**
 * Hook for sanitizing form inputs
 */
export function useSanitizedInput(initialValue: string = '') {
  const [value, setValue] = useState(initialValue);
  const [sanitized, setSanitized] = useState(initialValue);

  const handleChange = useCallback((newValue: string) => {
    setValue(newValue);
    setSanitized(sanitizeInput(newValue));
  }, []);

  return {
    value,
    sanitized,
    setValue: handleChange,
  };
}
