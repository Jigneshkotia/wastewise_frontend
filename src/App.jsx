import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactPage from "./Pages/ContactPage";
import LiveTrackingPage from "./Pages/LiveTrackingPage";

const HomePage = lazy(() => import("./Pages/HomePage"));
// const ThankYouPage = lazy(() => import("./Pages/ThankYouPage"));
const PriceList = lazy(() => import('./Pages/PriceList'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricelist" element={<PriceList />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/submit" element={<LiveTrackingPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;