import { BrowserRouter, Routes, Route } from "react-router";
import MainSite from "./MainSite";
import { SanityStudioRoute } from "./components/SanityStudioRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/studio/*" element={<SanityStudioRoute />} />
        <Route path="*" element={<MainSite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
