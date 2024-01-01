import { Avatar, Box } from "@mui/material";
import example from "../../../assets/img/pfp.jpg";
import pfp1 from "../../../assets/pfp/1.png";

import './Profile.css'

const Profile = ({datauser}) => {
  return (
    <Box className="flex flex-col justify-center ">
      <Box className="bg-header h-72 rounded-2xl">
      </Box>
      <Box className='flex justify-center'>
        <Avatar src={"../../../assets/pfp/1.png"} className="pfp-setting border-[#e2e3e59d] border-4 " sx={{width:174, height:174}}/>
      </Box>
      {console.log(datauser)}
      <Box className='flex flex-col  items-center mt-4'>
        <h1 className="text-lg font-semibold">{datauser.user_username}</h1>
        <p className="text-gray-400">{datauser.user_email}</p>
      </Box>
    </Box>
  );
}
 
export default Profile;