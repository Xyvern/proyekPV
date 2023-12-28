import { Box } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box>
      <nav>
        <li><NavLink to="/">Home</NavLink></li>
      </nav>
      <Outlet/>
    </Box>
  );
}
 
export default Layout;