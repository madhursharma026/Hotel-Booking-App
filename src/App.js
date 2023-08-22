import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import HotelList from "./pages/HotelList";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from "./Components/Header/Navbar1";
import { BrowserRouter, Routes, Route, } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hotel" element={<Hotel />} />
        <Route path="/HotelList" element={<HotelList />} />
          <Route path="*" element={<><Navbar1 /> <h1 className="mt-5 pt-5" style={{ textAlign: 'center' }}>No Page Found!</h1></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
