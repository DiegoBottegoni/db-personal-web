import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ContactPage from "./presentation/pages/Contact/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
export default App