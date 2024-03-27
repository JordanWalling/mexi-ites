import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider, appContext } from "./context/context";
import { useContext } from "react";
import HomeLayout from "./layout/HomeLayout";
import LandingPage from "./pages/LandingPage";
import MenuListPage from "./pages/MenuListPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import CartPage from "./pages/Cart/CartPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeLayout />}>
              <Route index element={<LandingPage />} />
              <Route path="/menu" element={<MenuListPage />} />
              <Route path="/menu/:id" element={<ItemDetailsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
