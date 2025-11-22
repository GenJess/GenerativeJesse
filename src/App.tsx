import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PromptResource from "./pages/PromptResource";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/apps/prompts" element={<PromptResource />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
