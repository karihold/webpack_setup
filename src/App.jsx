import React from "react";
import { createRoot } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frontpage from "pages/frontpage/frontpage";
import Header from "landmarks/header/header";
import Footer from "landmarks/footer/footer";
import "scss/base.scss";

const root = createRoot(document.querySelector("#render-target"));

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Frontpage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

root.render(<App />);
