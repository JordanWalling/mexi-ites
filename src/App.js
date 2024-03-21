import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="/menu" element={<>Menu Page</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
