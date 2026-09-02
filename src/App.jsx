import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Capabilities from "./pages/Capabilities.jsx";
import CapabilityDetail from "./pages/CapabilityDetail.jsx";
import Equipment from "./pages/Equipment.jsx";
import Industries from "./pages/Industries.jsx";
import Quality from "./pages/Quality.jsx";
import Clients from "./pages/Clients.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="capabilities" element={<Capabilities />} />
        <Route path="capabilities/:slug" element={<CapabilityDetail />} />
        <Route path="equipment" element={<Equipment />} />
        <Route path="industries" element={<Industries />} />
        <Route path="quality" element={<Quality />} />
        <Route path="clients" element={<Clients />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
