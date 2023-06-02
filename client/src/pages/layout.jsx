import { Outlet } from "react-router-dom";
// import { ToastContainer } from 'react-toastify'
import NavBar2 from "../components/commons/NavBar2";
import ContenedorWeb from "../components/commons/ContenedorWeb";
function Layout() {
  return (
    <>
      <ContenedorWeb>
        <NavBar2 />
        <Outlet />
      </ContenedorWeb>
    </>
  );
}

export default Layout;
