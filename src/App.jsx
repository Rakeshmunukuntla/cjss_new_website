import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Resources from "./pages/Resources";
import ResourceDetailPage from "./pages/ResourceDetailPage";
import NotFound from "./pages/NotFound";
import EventRegisterPage from "./pages/events/EventRegisterPage";

// Service Pages
import QualityEngineering from "./pages/services/QualityEngineering";
import CloudTechnologies from "./pages/services/CloudTechnologies";
import ApplicationModernization from "./pages/services/ApplicationModernization";
import DigitalCommerce from "./pages/services/DigitalCommerce";
import AI from "./pages/services/AI";
import LifeAtCJSS from "./pages/career/LifeAtCJSS";
import FresherJobs from "./pages/career/FresherJobs";
import ExperiencedJobs from "./pages/career/ExperiencedJobs";
import Problems from "./pages/career/Problems";

import EventDetailPage from "./pages/events/EventDetailPage";
import EventsPage from "./pages/events/Events"; // ✅ ADD THI

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/life-at-cjss" element={<LifeAtCJSS />} />
        <Route path="/jobs/fresher" element={<FresherJobs />} />
        <Route path="/jobs/experienced" element={<ExperiencedJobs />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:id" element={<ResourceDetailPage />} />{" "}
        {/* ✅ ADD THIS ROUTE */}
        {/* Technology Services */}
        <Route
          path="/services/quality-engineering"
          element={<QualityEngineering />}
        />
        //{" "}
        <Route
          path="/services/digital-commerce"
          element={<DigitalCommerce />}
        />
        <Route
          path="/services/application-modernization"
          element={<ApplicationModernization />}
        />
        //{" "}
        <Route
          path="/services/cloud-technologies"
          element={<CloudTechnologies />}
        />
        <Route path="/services/ai" element={<AI />} />
        <Route path="/events/:id" element={<EventDetailPage />} />
        <Route
          path="/events/:id/register"
          element={<EventRegisterPage />}
        />{" "}
        <Route path="/events" element={<EventsPage />} />{" "}
        {/* ✅ ADD THIS ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
