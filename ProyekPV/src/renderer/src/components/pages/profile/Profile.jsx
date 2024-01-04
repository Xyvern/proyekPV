import { Avatar, Box } from "@mui/material";
import example from "../../../assets/img/pfp.jpg";
import pfp1 from "../../../assets/pfp/1.png";

import './Profile.css'
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Profile = ({user,handlelogout}) => {
  const [datadiri, setDatadiri] = useState({})
  useEffect(() => {
    window.api.login().then(function(res){
      console.log(user);
      if(user !== ''){
        const temp = res[0].find((v) => v.user_username === user)
        setDatadiri(temp)
        console.log(temp);
      }
    })
  },[])

  return (
    <Box className="flex flex-col justify-center ">
      <Box className="bg-header h-72 rounded-2xl">
      </Box>
      <Box className='flex justify-center'>
        <Avatar src={pfp1} className="pfp-setting border-[#e2e3e59d] border-4 " sx={{width:174, height:174}}/>
      </Box>
      <Box className='flex flex-col  items-center mt-4'>
        <h1 className="text-lg font-semibold">{datadiri.user_username}</h1>
        <p className="text-gray-400">{datadiri.user_email}</p>
      </Box>
      <div className='flex justify-center mt-4 py-10'>
          {/* <h1>Welcome {user}!</h1> */}
          <button className='text-white backdrop-blur-sm bg-[#ffffff2c] px-10 py-2 border-solid border-2 border-[#e2e3e59d] rounded-full font-semibold shadow-2xl mb-2 btn'
          onClick={() => handlelogout()}>Log Out</button>
        </div>
    </Box>
    
  );
}
 
export default Profile;