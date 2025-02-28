import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./views/Landing";
function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
