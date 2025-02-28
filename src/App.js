import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/views/Layout";
import Landing from "../src/views/Landing";
import Stake from "../src/views/Stake";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="*" element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
