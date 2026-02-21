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

// All pages - eager loading for reliability
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Colleges from "./pages/Colleges";
import CollegeDetail from "./pages/CollegeDetail";
import Rankings from "./pages/Rankings";
import Compare from "./pages/Compare";
import Stories from "./pages/Stories";
import StoryDetail from "./pages/StoryDetail";
import WriteReview from "./pages/WriteReview";
import WriteProfReview from "./pages/WriteProfReview";
import ProfessorDetail from "./pages/ProfessorDetail";
import Profile from "./pages/Profile";
import Opportunities from "./pages/Opportunities";
import CampusDrives from "./pages/CampusDrives";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Contribute from "./pages/Contribute";

// Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 2,
      gcTime: 1000 * 60 * 10,
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
            </AppLayout>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;
