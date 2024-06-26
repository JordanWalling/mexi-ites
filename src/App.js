import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/context";

import HomeLayout from "./layout/HomeLayout";
import LandingPage from "./pages/LandingPage";
import MenuListPage from "./pages/MenuListPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import CartPage from "./pages/Cart/CartPage";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
