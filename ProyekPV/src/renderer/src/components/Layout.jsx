import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <Box>
      <nav>
        <li><NavLink to="/">Home</NavLink></li>
      </nav>
    </Box>
  );
}
 
export default Layout;