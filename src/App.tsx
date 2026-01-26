import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import ForBusinesses from "./pages/ForBusinesses";
import ForCreators from "./pages/ForCreators";
import OurApps from "./pages/OurApps";
import Whisper from "./pages/Whisper";
import WhisperPrivacy from "./pages/WhisperPrivacy";
import WhisperTerms from "./pages/WhisperTerms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/for-businesses" element={<ForBusinesses />} />
          <Route path="/for-creators" element={<ForCreators />} />
          <Route path="/our-apps" element={<OurApps />} />
          <Route path="/whisper" element={<Whisper />} />
          <Route path="/whisper/privacy" element={<WhisperPrivacy />} />
          <Route path="/whisper/terms" element={<WhisperTerms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
