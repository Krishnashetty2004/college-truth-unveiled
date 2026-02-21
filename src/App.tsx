import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import ErrorBoundary from "./components/ErrorBoundary";
import { useTrackReferralClick, useReferralSetup } from "./hooks/useReferral";

// Eager load critical pages
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

// Lazy load other pages for better performance
const Colleges = lazy(() => import("./pages/Colleges"));
const CollegeDetail = lazy(() => import("./pages/CollegeDetail"));
const Rankings = lazy(() => import("./pages/Rankings"));
const Compare = lazy(() => import("./pages/Compare"));
const Stories = lazy(() => import("./pages/Stories"));
const StoryDetail = lazy(() => import("./pages/StoryDetail"));
const WriteReview = lazy(() => import("./pages/WriteReview"));
const WriteProfReview = lazy(() => import("./pages/WriteProfReview"));
const ProfessorDetail = lazy(() => import("./pages/ProfessorDetail"));
const Profile = lazy(() => import("./pages/Profile"));
const Opportunities = lazy(() => import("./pages/Opportunities"));
const CampusDrives = lazy(() => import("./pages/CampusDrives"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Contribute = lazy(() => import("./pages/Contribute"));

// Simple loading spinner
const PageLoader = () => (
  <div className="flex min-h-[50vh] items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
  </div>
);

// Query client with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 2, // 2 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// Track referrals - fails silently
function ReferralTracker() {
  useTrackReferralClick();
  useReferralSetup();
  return null;
}

const App = () => (
  <ErrorBoundary>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ReferralTracker />
            <AppLayout>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  {/* Public routes */}
                  <Route path="/" element={<Index />} />
                  <Route path="/auth" element={<Auth />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/privacy" element={<Privacy />} />

                  {/* Protected routes */}
                  <Route path="/colleges" element={<ProtectedRoute><Colleges /></ProtectedRoute>} />
                  <Route path="/colleges/:id" element={<ProtectedRoute><CollegeDetail /></ProtectedRoute>} />
                  <Route path="/colleges/:collegeId/review" element={<ProtectedRoute><WriteReview /></ProtectedRoute>} />
                  <Route path="/professors/:professorId/review" element={<ProtectedRoute><WriteProfReview /></ProtectedRoute>} />
                  <Route path="/professors/:id" element={<ProtectedRoute><ProfessorDetail /></ProtectedRoute>} />
                  <Route path="/rankings" element={<ProtectedRoute><Rankings /></ProtectedRoute>} />
                  <Route path="/compare" element={<ProtectedRoute><Compare /></ProtectedRoute>} />
                  <Route path="/opportunities" element={<ProtectedRoute><Opportunities /></ProtectedRoute>} />
                  <Route path="/campus-drives" element={<ProtectedRoute><CampusDrives /></ProtectedRoute>} />
                  <Route path="/contribute" element={<ProtectedRoute><Contribute /></ProtectedRoute>} />
                  <Route path="/stories" element={<ProtectedRoute><Stories /></ProtectedRoute>} />
                  <Route path="/stories/:id" element={<ProtectedRoute><StoryDetail /></ProtectedRoute>} />
                  <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </AppLayout>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;
