import { Home } from "lucide-react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Homee from "./pages/Homee";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homee /> } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
