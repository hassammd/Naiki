import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="grid   grid-cols-[260px_1fr] min-h-screen">
        <SideBar />
        <div className="h-screen overflow-y-auto p-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Layout;
