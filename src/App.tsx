import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import RulesPage from "./pages/RulesPage";
import HallOfShamePage from "./pages/HallOfShamePage";
import IncidentsPage from "./pages/IncidentsPage";
import QuizPage from "./pages/QuizPage";
import SurvivalPage from "./pages/SurvivalPage";
import GlossaryPage from "./pages/GlossaryPage";
import FormalRulesPage from "./pages/FormalRulesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/hall-of-shame" element={<HallOfShamePage />} />
          <Route path="/incidents" element={<IncidentsPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/survival" element={<SurvivalPage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="/formal-rules" element={<FormalRulesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
