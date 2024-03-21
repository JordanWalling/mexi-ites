import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
function HomeLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default HomeLayout;
