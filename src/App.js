import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./Components/Home";

import Page from "./Components/Page";
import Destination from "./Components/Destination";
import Crew from "./Components/Crew";
import Technology from "./Components/Technology";

import data from "./data.json";

import "./scss/App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="" element={<Home />} />
          <Route path="destination/*" element={<Page page_data={data.destinations} page_app={Destination} />} />
          <Route path="crew/*" element={<Page page_data={data.crew} page_app={Crew} />} />
          <Route path="technology/*" element={<Page page_data={data.technology} page_app={Technology} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App