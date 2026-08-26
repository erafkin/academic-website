import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Publications from "./pages/Publications.jsx";
import Outdoors from "./pages/Outdoors.jsx";
import Music from "./pages/Music.jsx";
import Sports from "./pages/Sports.jsx";


export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/outdoors" element={<Outdoors />} />
        <Route path="/music" element={<Music />} />
        <Route path="/sports" element={<Sports />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
