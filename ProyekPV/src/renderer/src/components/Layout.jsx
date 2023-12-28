import { Box } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import './Layout.css'

const Layout = () => {
  return (
    // <Box>
    //   <nav>
    //     <li><NavLink to="/">Home</NavLink></li>
    //   </nav>
    //   <Outlet/>
    // </Box>
    <Box className="bg-main text-white">
      <Box className="z-50 backdrop-blur sticky top-0">
        <nav className="w-100 h-10vh flex justify-between lg-:py-5 px-5 py-5">
          <div className="flex items-center flex-1">
            {/* <span><IoFastFoodSharp size={32} className="fill-balck-500"/></span> */}
            <h3 className="text-2xl font-extrabold text-black px-5">Dapur AB</h3>
          </div>
          <div>
            <ul className="flex gap-8 mr-6 text-[18px]">
              <li><NavLink to="/" className="hover:text-gray-500">Home</NavLink></li>
              <li><NavLink to="/filter" className="hover:text-gray-500">Filter</NavLink></li>
              <li><NavLink to="/myfav" className="hover:text-gray-500">My Favourites</NavLink></li>
              <li><NavLink to="/profile" className="hover:text-gray-500">Profile</NavLink></li>
            </ul>
          </div>
        </nav>
      </Box>
      <Box>
        <Outlet/>
      </Box>
    </Box>
  );
}
 
export default Layout;