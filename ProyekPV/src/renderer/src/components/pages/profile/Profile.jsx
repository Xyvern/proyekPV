import { Avatar, Box } from "@mui/material";
import example from "../../../assets/img/pfp.jpg";
import pfp1 from "../../../assets/pfp/1.png";

import './Profile.css'
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Profile = ({user}) => {
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
    </Box>
  );
}
 
export default Profile;