import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import LandingPage from "./pages/LandingPage";
import MenuListPage from "./pages/MenuListPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="/menu" element={<MenuListPage />} />
            <Route path="/menu/:id" element={<ItemDetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
