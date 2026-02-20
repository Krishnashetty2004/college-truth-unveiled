// Bot/Scraper Detection Utility
// Detects headless browsers like Puppeteer, Selenium, Playwright

export function detectBot(): boolean {
  if (typeof window === 'undefined') return false;

  const navigator = window.navigator;
  const userAgent = navigator.userAgent.toLowerCase();

  // Check for headless browser indicators
  const checks = [
    // Puppeteer/Headless Chrome detection
    /headless/i.test(userAgent),

    // WebDriver detection (Selenium, Puppeteer, Playwright)
    !!(navigator as any).webdriver,

    // Check for automation properties
    !!(window as any).__nightmare,
    !!(window as any)._phantom,
    !!(window as any).phantom,
    !!(window as any).callPhantom,
    !!(window as any).__selenium_unwrapped,
    !!(window as any).__webdriver_evaluate,
    !!(window as any).__driver_evaluate,
    !!(window as any).__webdriver_unwrapped,
    !!(window as any).__driver_unwrapped,
    !!(window as any).__fxdriver_evaluate,
    !!(window as any).__fxdriver_unwrapped,
    !!(window as any).domAutomation,
    !!(window as any).domAutomationController,
    !!(document as any).__webdriver_script_fn,
    !!(document as any).$cdc_asdjflasutopfhvcZLmcfl_,
    !!(document as any).$chrome_asyncScriptInfo,

    // Playwright detection
    !!(window as any).__playwright,
    !!(window as any).__pw_manual,

    // Check for missing plugins (headless browsers often have none)
    navigator.plugins.length === 0 && !/mobile|android|iphone|ipad/i.test(userAgent),

    // Check for missing languages
    !navigator.languages || navigator.languages.length === 0,

    // Chrome-specific headless detection
    /HeadlessChrome/i.test(userAgent),

    // Check for suspicious permission behavior
    typeof (navigator as any).permissions === 'undefined',
  ];

  return checks.some(check => check === true);
}

export function detectSuspiciousActivity(): boolean {
  if (typeof window === 'undefined') return false;

  // Check for rapid-fire requests (stored in sessionStorage)
  const now = Date.now();
  const lastVisit = parseInt(sessionStorage.getItem('_lv') || '0', 10);
  const visitCount = parseInt(sessionStorage.getItem('_vc') || '0', 10);

  sessionStorage.setItem('_lv', now.toString());
  sessionStorage.setItem('_vc', (visitCount + 1).toString());

  // Reset count after 1 minute
  if (now - lastVisit > 60000) {
    sessionStorage.setItem('_vc', '1');
    return false;
  }

  // More than 100 page loads per minute is suspicious
  if (visitCount > 100) {
    return true;
  }

  return false;
}

export function initBotProtection(): void {
  if (typeof window === 'undefined') return;

  const isBot = detectBot();
  const isSuspicious = detectSuspiciousActivity();

  if (isBot || isSuspicious) {
    // Log the attempt (you could send this to analytics)
    console.warn('Bot/scraper detected');

    // Clear the page and show a message
    document.body.innerHTML = `
      <div style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        font-family: system-ui, -apple-system, sans-serif;
        background: #0a0a0a;
        color: #fff;
        text-align: center;
        padding: 20px;
      ">
        <h1 style="font-size: 2rem; margin-bottom: 1rem;">Access Denied</h1>
        <p style="color: #888; max-width: 400px;">
          Automated access to this site is not permitted.
          Please use a regular browser to access RateMyCollege.
        </p>
      </div>
    `;

    // Prevent any further script execution
    throw new Error('Bot detected - stopping execution');
  }
}
