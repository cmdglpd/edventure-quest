import { Outlet } from "react-router-dom";
import NavDrawer from "../components/navigation/NavDrawer"

export default function Root({}) {
  return (
    <>
      <NavDrawer>
        <Outlet />
      </NavDrawer>
      {/* <NavigationDrawer>
        <Outlet />
      </NavigationDrawer> */}
    </>
  );
}
