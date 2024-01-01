import { useEffect, useRef, useState } from "react";
import { Box, Divider, Rating } from "@mui/material";
import { Textarea } from "@mui/joy";
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import CloseRounded from '@mui/icons-material/CloseRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import example from "../../../assets/img/encanto.jpg";

const MyFavourites = ({user}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [idx, setIdx] = useState(null);
  const [favorite, setFavorite] = useState([])

  useEffect(() =>{
    window.api.loadfavorite(user).then(function(res){
      setFavorite(res[0])
      console.log(res[0]);
    })
  },[])

  return (
    <Box>
      <Box className='mt-8'>
        {/* Filtered Item */}
      {favorite.map((video,i) =>{
      return(
        <Box key={i}>
          <button className='flex flex-row ' onClick={() => {setOpen(true);setIdx(i)}}>
            <img src={example} alt="" className="rounded-lg w-[18rem]"/>
                <Box className="ml-5 text-left">
                  <p>
                    <span className="mr-2 text-xs text-gray-400">Category</span>
                    <span className="mr-2 text-xs text-gray-400">┃</span>
                    <span className="mr-2 text-xs text-gray-400">Genre</span>
                  </p>
                  {/* Judul Movie */}
                  <p className="text-lg mt-1 font-semibold text-violet-100">{video.video_name}</p>
                  <span className="mr-1">
                      <StarRoundedIcon sx={{fontSize:20, color:'#FFEF00'}}/>
                  </span>
                  {/* Overall Rate */}
                  <span className="mr-2 text-xs font- text-gray-400">4.5{'/5'}</span>
                  {/* Desc Movie */}
                  <p className="mt-4 text-xs  text-violet-200">{video.video_detail}</p>
                </Box>
          </button>
          <Divider sx={{bgcolor:'#ffffff4a',marginTop:2, marginBottom:2}} />
        </Box>
        )})}
      </Box>
      <Modal open={open} onClose={() => setOpen(false)} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color:'white',  overflow: 'hidden' }}  >
        <Sheet  sx={{ width:'80vw',borderRadius: 'md',p: 5,boxShadow: 'lg', bgcolor:'rgb(19, 1, 62) ', color:'white', overflowY: 'auto', maxHeight: '70vh','::-webkit-scrollbar': {
        display: 'none',
      },}}  >
          <ModalClose variant="soft" sx={{ m: 1, bgcolor:'#413988' }}  />
          <Box className="flex flex-col">
            <Box className="flex">
              {/* Embed Video */}
              <iframe style={{boxShadow:'-19vw 1vw 90vw 1vw #280185'}}
                width="100%"
                height="400rem"
                src={idx !== null ? favorite[idx].video_link : 'Link video tidak ditemukan'} className="rounded-lg mt-10 flex"
                ></iframe>            
            </Box>
            <p className="mt-6">
              <span className="mr-1">
                <StarRoundedIcon sx={{fontSize:20, color:'#FFEF00'}}/>
              </span>
              {/* Overall Rate */}
              <span className="mr-2 text-xs font- text-gray-400">4.5{'/5'}</span>
              <span className="mr-2 text-xs text-gray-400">┃</span>
              <span className="mr-2 text-xs text-gray-400">Category</span>
              <span className="mr-2 text-xs text-gray-400">┃</span>
              <span className="mr-2 text-xs text-gray-400">Genre</span>
            </p>
            {/* Judul Movie */}
            <p className="text-5xl mt-2 font-semibold text-violet-100">{idx !== null ? favorite[idx].video_name : 'Nama video tidak ditemukan'}</p>
            {/* Desc Movie */}
            <p className="mt-4 text-sm text-violet-200">{idx !== null ? favorite[idx].video_detail : 'Detail video tidak ada'}</p>
            <Box className="flex flex-row 'mb-3 mt-8">
              <Box className='mr-4'>
                {/* Button Unfavorite */}
                <button className='text-white text-sm  bg-[#ffffff2c] px-4 py-2 border-solid rounded-full font-semibold shadow-lg  btn flex items-center' onClick={() => window.api.removefavorite(favorite[idx].video_id)}>Unfavorite<span className="ml-2" ><RemoveCircleRoundedIcon/></span></button>
              </Box>
              <Box className='flex flex-row'>
                {/* Rating */}
                <Box className='text-white text-sm  bg-[#ffffff2c] px-4 py-2 border-solid rounded-l-full font-semibold shadow-lg   flex items-center' >
                  <Rating name="simple-controlled" value={value} onChange={(event, newValue) => {setValue(newValue)}} />
                </Box>
                {/* Button Submit Rating*/}
                <button className='text-white text-sm  bg-[#ffffff4a] pl-2 pr-3 py-2 border-solid rounded-r-full font-semibold shadow-lg  flex items-center'>Submit</button>
              </Box>
            </Box>
            <Box className='mt-12'>
              <p className="text-sm mb-2">Add a comment</p>
              {/* Textarea Comments */}
              <Textarea
                placeholder="Type in here…"
                minRows={2}
                sx={{borderRadius:'lg',color:'rgb(19, 1, 62)', '&::before': {display: 'none'},'&:focus-within': {
                outline: '2px solid var(--Textarea-focusedHighlight)',
                outlineOffset: '2px', borderRadius:'lg', color:'rgb(19, 1, 62)', }}}
              />
              {/* Button Submit Comments */}
              <button className='text-white text-sm  bg-[#ffffff4a] px-4 py-2 border-solid border- border-[#e2e3e59d] mt-4 rounded-lg font-semibold shadow-lg btn'>Submit</button>
            </Box>
            <Divider sx={{bgcolor:'#ffffff4a',marginTop:4, marginBottom:1}} />
            {/* List Comments */}
            <Box className='mb-6'>
              <p className="text-md mt-2 font-medium text-violet-100">Nama User</p>
              <p className="text-[10px] text-gray-400 mt-1">31 Desember 2023  12:30</p>
              <p className="mt-2 text-xs text-violet-200">"Cows Cows Cows" is a surreal and humorous animated short video that gained popularity on the internet. The video features repeating images of cows with a catchy and rhythmic song in the background chanting "Cows cows cows, I like cows, I like cows, I like cows..."</p>
            </Box>
          </Box>
        </Sheet>
      </Modal>
    </Box>
  );
}
 
export default MyFavourites;