import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import withMainLayout from "./Layouts/MainLayout";

// Pages
import MainPage from "./Pages/MainPage";

// InitLayouts

const MainPageWithLayout = withMainLayout(() => MainPage);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPageWithLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
