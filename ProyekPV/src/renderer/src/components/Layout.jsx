import { Box } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import './Layout.css'
import AnimationIcon from '@mui/icons-material/Animation';
import SearchIcon from '@mui/icons-material/Search';

const Layout = () => {
  return (
    <Box className="bg-main text-white">
      <Box className="z-50 backdrop-blur sticky top-0 ">
        <nav className="w-100 h-10vh flex justify-between lg-:py-5 px-16 py-5">
          <div className="flex items-center flex-1 sticky top-0 ">
          <AnimationIcon fontSize='medium' sx={{color: 'white'}} className=''/>
            <h3 className="text-lg font-semibold text-white px-2">Cinemate</h3>
            <Box className="flex mx-5">
              <input type="text" placeholder="Search anything..." className="text-white rounded-l-lg px-4 py-1 text-sm w-[20rem] bg-[#413988]"/>
              <Box className="bg-white rounded-r-lg w-8 h-8 flex justify-center">
                <button><SearchIcon sx={{color: 'black'}}/></button>
              </Box>
            </Box>
          </div>
          <div>
            <ul className="flex gap-8 mr-6 text-md font-semibold">
              <li><NavLink to="/" className="hover:text-gray-500">Home</NavLink></li>
              <li><NavLink to="/filter" className="hover:text-gray-500">Filter</NavLink></li>
              <li><NavLink to="/myfav" className="hover:text-gray-500">My Favourites</NavLink></li>
              <li><NavLink to="/profile" className="hover:text-gray-500">Profile</NavLink></li>
              
            </ul>
          </div>
        </nav>
      </Box>
      <Box className="px-16">
        <Outlet/>
      </Box>
    </Box>
  );
}
 
export default Layout;