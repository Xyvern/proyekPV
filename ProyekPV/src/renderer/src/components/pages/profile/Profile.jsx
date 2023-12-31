import { Avatar, Box } from "@mui/material";
import example from "../../../assets/img/pfp.jpg";

import './Profile.css'

const Profile = () => {
  return (
    <Box className="flex flex-col justify-center ">
      <Box className="bg-header h-72 rounded-2xl">
      </Box>
      <Box className='flex justify-center'>
        <Avatar src={example} className="pfp-setting border-[#e2e3e59d] border-4 " sx={{width:174, height:174}}/>
      </Box>
      <Box className='flex flex-col  items-center mt-4'>
        <h1 className="text-lg font-semibold">Example Hanley</h1>
        <p className="text-gray-400">example@gmail.com</p>
      </Box>
    </Box>
  );
}
 
export default Profile;