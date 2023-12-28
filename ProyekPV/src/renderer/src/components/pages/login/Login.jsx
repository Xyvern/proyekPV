import { useRef, useState } from 'react'
import { Box, Button, TextField } from '@mui/material';
import AnimationIcon from '@mui/icons-material/Animation';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import './Login.css'


const LoginRegister = ({handlelogin}) => {
  const [page, setPage] = useState('login')

  // const [loginUname, setLoginUname] = useState("");
  // const [loginPass, setLoginPass] = useState("");
  const registerUnameTxt = useRef("")
  const registerPassTxt = useRef("")

  const handleLoginClick = (event) => {
    event.preventDefault(); 
    handlelogin(registerUnameTxt.current.value, registerPassTxt.current.value);
  };

  if (page == "login") {
    return (
      <Box className="gmbr justify-center  items-center">
        <Box className='flex flex-col justify-center  items-center' height={'100vh'}>
          <Box className='flex flex-col mb-10 justify-center items-center animate-bounce'>
            <h1 className='text-white font-semibold tracking-wider text-lg'>Welcome back <span className='underline underline-offset-8'>Cinematers!</span></h1>
          </Box>
          <Box className="backdrop-blur-md flex h-[25rem] w-80 flex-col items-center justify-center rounded-2xl border-2 border-[#ffffff66] shadow-2xl">
            <h1 className='font-extrabold text-2xl mb-5 text-white'>Login</h1>
            <form className='flex justify-center items-center flex-col'>
              {/* Texfield Username Login */}
              <Box className='mb-5'>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <PersonIcon sx={{ color: 'white', mr: 1, my: 0.5 }} />
                  <TextField id="input-with-sx" label="Username" type='text' variant="standard" inputRef={registerUnameTxt} sx={{ input: { color: 'white' } }}/>
                </Box>
              </Box>
              {/* Texfield Password Login */}
              <Box className='mb-10'>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }} >
                  <LockIcon sx={{ color: 'white', mr: 1, my: 0.5 }} />
                  <TextField id="input-with-sx" label="Password" type='password' variant="standard" inputRef={registerPassTxt} sx={{ input: { color: 'white' } }}/>
                </Box>
              </Box>
              {/* Button Login */}
              <Box className='mb-3'>
                <button
                className='text-white backdrop-blur-sm bg-[#ffffff2c] px-20 py-2 border-solid border-2 border-[#e2e3e59d] rounded-full font-semibold shadow-2xl mb-2 btn'
                onClick={handleLoginClick}>
                    Login</button>
              </Box>
            </form>
            <p className='text-white text-sm'>Don't have an account? <span><button className='underline underline-offset-4 font-semibold' onClick={()=> setPage("register")}>Register</button></span></p>
          </Box>
        </Box>
      </Box>
    )
  } else {
    return (
      <Box className="gmbr justify-center  items-center">
        <Box className='flex justify-center  items-center' height={'100vh'}>
          {/* WRAPPER */}
          <Box className='flex justify-center  items-center shadow-xl rounded-2xl'>
            {/* LAYOUT KIRI */}
            <Box className="bg-fuchsia-100 flex h-[30rem] w-80 flex-col rounded-l-2xl p-10 justify-center">
              <span className='pb-5'><AnimationIcon fontSize='large' sx={{color: 'black'}} className='mx-2'/></span>
              <h1 className='text-4xl font-bold  pb-8'>Welcome to <span className='bg-gradient-to-r from-pink-400  px-3'>Cinemate!</span></h1>
              <p className='text-xs text-pink-'>Explore a world of endless entertainment. Dive into an unparalleled collection of movies, series, and documentaries. Immerse yourself in the magic of cinema from the comfort of your screen</p>
            </Box>
            {/* LAYOUT KANAN */}
            <Box className="backdrop-blur-md flex h-[30rem] w-80 flex-col items-center justify-center rounded-r-2xl">
              <h1 className='font-extrabold text-2xl mb-5 text-white'>Register</h1>
              <form className='flex justify-center items-center flex-col'>
                {/* Texfield Username */}
                <Box className='mb-2'>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <PersonIcon sx={{ color: 'white', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Username" type='text' variant="standard" sx={{ input: { color: 'white' } }} ref={registerUnameTxt}/>
                  </Box>
                </Box>
                {/* Texfield Email */}
                <Box className='mb-2'>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <EmailIcon sx={{ color: 'white', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Email Address" type='text' variant="standard" sx={{ input: { color: 'white' } }} ref={registerUnameTxt}/>
                  </Box>
                </Box>
                {/* Texfield Phone Number */}
                <Box className='mb-2'>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <PhoneAndroidIcon sx={{ color: 'white', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Phone Number" type='text' variant="standard" sx={{ input: { color: 'white' } }} ref={registerUnameTxt}/>
                  </Box>
                </Box>
                {/* Texfield Password */}
                <Box className='mb-10'>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }} >
                    <LockIcon sx={{ color: 'white', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Password" type='password' variant="standard" ref={registerPassTxt}  sx={{ input: { color: 'white' } }}/>
                  </Box>
                </Box>
                {/* Button Register */}
                <Box className='mb-3'>
                  <button className='text-white backdrop-blur-sm bg-[#ffffff2c] px-20 py-2 border-solid border-2 border-[#e2e3e59d] rounded-full font-semibold shadow-lg mb-2 btn'>Register</button>
                </Box>
              </form>
              <p className='text-white text-sm'>Already have an account? <span><button className='underline underline-offset-4 font-semibold' onClick={()=> setPage("login")}>Login</button></span></p>
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }
}
 
export default LoginRegister;