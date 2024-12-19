import { Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "./components/_layout/MainLayout";
import { About, Contact, Home } from "./pages";

const App = () => {
  const location = useLocation()
  return (
    <MainLayout>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
