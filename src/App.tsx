import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Index from "./pages/Index";
import Colleges from "./pages/Colleges";
import CollegeDetail from "./pages/CollegeDetail";
import Rankings from "./pages/Rankings";
import Compare from "./pages/Compare";
import Stories from "./pages/Stories";
import StoryDetail from "./pages/StoryDetail";
import WriteReview from "./pages/WriteReview";
import WriteProfReview from "./pages/WriteProfReview";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import ProfessorDetail from "./pages/ProfessorDetail";
import Profile from "./pages/Profile";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 minute - don't refetch immediately
      refetchOnWindowFocus: false, // Don't refetch when tab regains focus
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/colleges" element={<Colleges />} />
            <Route path="/colleges/:id" element={<CollegeDetail />} />
            <Route path="/colleges/:collegeId/review" element={<WriteReview />} />
            <Route path="/professors/:professorId/review" element={<WriteProfReview />} />
            <Route path="/professors/:id" element={<ProfessorDetail />} />
            <Route path="/rankings" element={<Rankings />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/stories/:id" element={<StoryDetail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
