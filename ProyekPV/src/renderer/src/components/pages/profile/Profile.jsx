import { Avatar, Box, FormLabel } from "@mui/material";
import example from "../../../assets/img/pfp.jpg";
import './Profile.css'
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import Input from '@mui/joy/Input';
import pfp1 from "../../../assets/pfp/1.png"
import pfp2 from '../../../assets/pfp/2.png'
import pfp3 from '../../../assets/pfp/3.png'
import pfp4 from '../../../assets/pfp/4.png'
import pfp5 from '../../../assets/pfp/5.png'
import pfp6 from '../../../assets/pfp/6.png'
import pfp7 from '../../../assets/pfp/7.png'
import pfp8 from '../../../assets/pfp/8.png'
import pfp9 from '../../../assets/pfp/9.png'

const Profile = ({user,handlelogout,handlepfp,handlechange}) => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [datadiri, setDatadiri] = useState({})
  const changeEmail = useRef("");
  const changePhone = useRef("");
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

  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 44,
    height: 44,
    border: `2px solid ${theme.palette.background.paper}`,
  }));
  function gantipfp(idpfp){
    let temp = datadiri
    temp.user_pfp = `/src/assets/pfp/${idpfp}.png`
    console.log(temp);
    setDatadiri(temp)
    handlepfp(temp.user_username, temp.user_pfp)
    setOpenEdit(false)
  }
  function gantidetail(newemail,newphone){
    let changeemail = true
    let changephone = true
    if (newemail==""||newemail==" "||newemail==null){
      changeemail = false
    }
    if (newphone==""||newphone==" "||newphone==null){
      changephone = false
    }
    let temp = datadiri
    if (changeemail==true && changephone==true) {
      temp.user_email = newemail
      temp.user_phone = newphone
      handlechange(temp.user_username,newemail,newphone,1)
      setDatadiri(temp)
      setOpen(false)
    }else if (changeemail==true && changephone==false){
      temp.user_email = newemail
      handlechange(temp.user_username,newemail,null,2)
      setDatadiri(temp)
      setOpen(false)
    }else if (changeemail==false && changephone==true){
      temp.user_phone = newphone
      handlechange(temp.user_username,null,newphone,3)
      setDatadiri(temp)
      setOpen(false)
    }else{
      console.log("input salah");
    }
  }
  return (
    <Box className="flex flex-col justify-center ">
      <Box className="bg-header h-72 rounded-2xl">
      </Box>
      <Box className='flex justify-center'>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          // Button edit pfp
          <button className="w-10 h-10 bg-violet-400 rounded-full hover:bg-violet-500" onClick={()=> setOpenEdit(true)}><EditRoundedIcon/></button>
      }>
        <Avatar src={datadiri.user_pfp} className="pfp-setting border-[#e2e3e59d] border-4" sx={{width:174, height:174}}/>
      </Badge>

      </Box>
      <Box className='flex flex-col  items-center mt-4'>
        <h1 className="text-2xl font-semibold mb-4">{datadiri.user_username}</h1>
        <Box className="flex flex-col items-center">
          <p className="text-violet-300 text-sm mb-2">{datadiri.user_email}</p>
          <p className="text-violet-300 text-sm mb-2">{datadiri.user_phone}</p>
        </Box>
      </Box>
      <Box className='flex justify-center mt-8'>
        {/* Button Edit Form Profile */}
        <button
          className='text-white text-sm bg-[#ffffff2c] px-4 py-2 border-solid rounded-full font-semibold shadow-lg btn flex items-center mr-4 hover:bg-[#ffffff49]' onClick={() => {setOpen(true)}}>
          Edit Profile 
        </button>
        {/* Button Log Out */}
        <button
          className='text-white text-sm bg-[#ffffff2c] px-4 py-2 border-solid rounded-full font-semibold shadow-lg btn flex items-center hover:bg-[#ffffff49]'
          onClick={() => handlelogout()}>
          Log Out
        </button>
      </Box>
      {/* Modal Edit Profile */}
      <Modal open={open} onClose={() => setOpen(false)} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color:'white',  overflow: 'hidden' }}  >
        <Sheet  sx={{ width:'30vw',borderRadius: 'md',p: 5,boxShadow: 'lg', bgcolor:'rgb(19, 1, 62) ', color:'white', overflowY: 'auto', maxHeight: '70vh','::-webkit-scrollbar': {
        display: 'none',
      },}}  >
          <ModalClose variant="soft" sx={{ m: 1, bgcolor:'#413988' }}  />
          <Box className="flex flex-col">
            <h1 className="text-2xl mb-8 font-semibold">Edit Profile</h1>
            <form className='flex justify-center items-center flex-col '>
              {/* Input Email */}
              <Box className='mb-4'>
                <label className="font-medium text-sm">Email Address</label>
                <Input placeholder={datadiri.user_email} required sx={{bgcolor: 'white'}} onChange={(e)=>{changeEmail.current = e.target.value;console.log(changeEmail)}}/>
              </Box>
              {/* Input Phone */}
              <Box className='mb-10'>
                <label className="font-medium text-sm">Phone Number</label>
                <Input placeholder={datadiri.user_phone} required sx={{bgcolor: 'white'}} onChange={(e)=>{changePhone.current = e.target.value}}/>
              </Box>
              {/* Button Edit*/}
              <Box className='mb-2'>
                <button
                  className='text-white text-sm bg-[#ffffff2c] px-4 py-2 border-solid rounded-full font-semibold shadow-lg btn flex items-center hover:bg-[#ffffff49]'
                  onClick={()=>{gantidetail(changeEmail.current,changePhone.current);changeEmail.current="";changePhone.current=""}}
                  >
                  Save Changes
                </button>
              </Box>
            </form>
          </Box>
        </Sheet>
      </Modal>
      {/* Modal Change PFP */}
      <Modal open={openEdit} onClose={() => setOpenEdit(false)} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color:'white',  overflow: 'hidden' }}  >
        <Sheet  sx={{ width:'40vw',borderRadius: 'md',p: 5,boxShadow: 'lg', bgcolor:'rgb(19, 1, 62) ', color:'white', overflowY: 'auto', maxHeight: '70vh','::-webkit-scrollbar': {
        display: 'none',
      },}}  >
          <ModalClose variant="soft" sx={{ m: 1, bgcolor:'#413988' }}  />
          <Box className="flex flex-col">
            <h1 className="text-2xl font-semibold">Edit Profile Picture</h1>
            {/* List Image */}
            <p className="mt-2 mb-8 text-xs text-violet-200">Choose a single photo only as your profile picture. The profile picture will be automatically updated</p>
            <Box className='flex flex-wrap'>
              <button><img src={pfp1} alt="" className="w-24 h-24 shadow-xl rounded-lg mr-8 mb-8 hover:outline outline-offset-4 outline-2"
              onClick={()=>{
                gantipfp("1")
              }}/></button>
              <button><img src={pfp2} alt="" className="w-24 h-24 shadow-xl rounded-lg mr-8 mb-8 hover:outline outline-offset-4 outline-2"
              onClick={()=>{
                gantipfp("2")
              }}/></button>
              <button><img src={pfp3} alt="" className="w-24 h-24 shadow-xl rounded-lg mr-8 mb-8 hover:outline outline-offset-4 outline-2"
              onClick={()=>{
                gantipfp("3")
              }}/></button>
              <button><img src={pfp4} alt="" className="w-24 h-24 shadow-xl rounded-lg mr-8 mb-8 hover:outline outline-offset-4 outline-2"
              onClick={()=>{
                gantipfp("4")
              }}/></button>
              <button><img src={pfp5} alt="" className="w-24 h-24 shadow-xl rounded-lg mr-8 mb-8 hover:outline outline-offset-4 outline-2"
              onClick={()=>{
                gantipfp("5")
              }}/></button>
              <button><img src={pfp6} alt="" className="w-24 h-24 shadow-xl rounded-lg mr-8 mb-8 hover:outline outline-offset-4 outline-2"
              onClick={()=>{
                gantipfp("6")
              }}/></button>
              <button><img src={pfp7} alt="" className="w-24 h-24 shadow-xl rounded-lg mr-8 mb-8 hover:outline outline-offset-4 outline-2"
              onClick={()=>{
                gantipfp("7")
              }}/></button>
              <button><img src={pfp8} alt="" className="w-24 h-24 shadow-xl rounded-lg mr-8 mb-8 hover:outline outline-offset-4 outline-2"
              onClick={()=>{
                gantipfp("8")
              }}/></button>
              <button><img src={pfp9} alt="" className="w-24 h-24 shadow-xl rounded-lg mr-8 mb-8 hover:outline outline-offset-4 outline-2"
              onClick={()=>{
                gantipfp("9")
              }}/></button>
            </Box>
          </Box>
        </Sheet>
      </Modal>
    </Box>
  );
}
 
export default Profile;