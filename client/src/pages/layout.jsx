import { Outlet } from "react-router-dom";
// import { ToastContainer } from 'react-toastify'
import NavBar from "../components/commons/NavBar";
import ContenedorWeb from "../components/commons/ContenedorWeb";
function Layout() {
  return (
    <>
      <ContenedorWeb>
        <NavBar/>
        <Outlet />
      </ContenedorWeb>
    </>
  );
}

export default Layout;
