import { useEffect, useRef, useState } from "react";
import { Box, Button, Divider, Rating } from "@mui/material";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  Slider  from "react-slick";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import Add from '@mui/icons-material/AddCircleRounded';
import PlayArrowIcon from '@mui/icons-material/PlayArrowRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import './Home.css'
import banner from "../../../assets/img/tenkinoko1.png";
import example from "../../../assets/img/encanto.jpg";
import { Textarea } from "@mui/joy";
import { useLocation } from "react-router-dom";
import Search from "@mui/icons-material/Search";


const Home = ({listVideo, user, favoriteVideo, removefavorite,komen,favoritev,loadkomen,search}) => {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(null);
  const [value, setValue] = useState();
  const [id, setId] = useState('')
  const [isikomen, setIsikomen] = useState('')
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  useEffect(() => {
    if(idx!==null && id!==''){  
      loadkomen(id)
    }
  }, [listVideo, favoriteVideo,isikomen,idx,id,search]);

  const favorite = () => {
    if(favoriteVideo.find((v) => v.video_id ==id)){
       window.api.removefavorite(listVideo[idx].video_id).then(function(){
        favoritev(user)
      })
    } 
    else{
      window.api.addfavorite(user,listVideo[idx].video_id).then(function(){
         favoritev(user)
       })
    }
    // setId(null)
    // setIdx(null)
  }

  function addcomment(nama,id,content){
    const invalid = /['"`]/
    if(!invalid.test(content)){
      window.api.addkomen(nama,id,content).then(function(){})
      setIsikomen('')
    }
    else{
      alert(`Jangan menggunakan ' dan " `)
    }
  }

  if(search.length == 0){
    return (
      <Box>
        {/* Banner Cover */}
        <Card sx={{ border: 'none', borderRadius: '2rem', width: '100%', height: '30rem', marginTop:'2rem'}}>
          <CardCover sx={{bgcolor:'rgb(19, 1, 62)'}}>
            <img src={banner} alt="Tenkinoko" style={{boxShadow:'-19vw 1vw 90vw 1vw #280185'}}/>
          </CardCover>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent:'end', padding: '25px 70px'}}>
            <h1 className="text-white font-semibold text-5xl mb-5">Weathering with You</h1>
            <Box width={'50%'}>
              <p className="text-white text-xs mb-8">"Weathering with You" is a Japanese animated film directed by Makoto Shinkai, known for his visually stunning works. The story revolves around a high school boy named Hodaka Morishima who runs away from his remote island home to Tokyo. There, he encounters a girl named Hina Amano, who possesses a mysterious ability to control the weather.</p>
            </Box>
            <Box className="flex flex-row">
              {/* Button Watch Now  */}
              <Box className='mb-3'>
                <button className='text-white backdrop-blur-sm bg-[#ffffff2c] px-4 py-2 border-solid border-2 border-[#e2e3e59d] rounded-full font-semibold shadow-lg mr-5 btn flex items-center' 
                onClick={() => {setOpen(true);setIdx(22);setId(listVideo[22].video_id)}}>Watch Now <span className="ml-1"><PlayArrowIcon sx={{fontSize:30}}/></span></button>
              </Box>
              {/* Button Add Favourite  */}
              <Box className='mb-3 flex'>
                {/* <button className='text-white backdrop-blur-sm bg-[#ffffff2c] px-4 py-2 border-solid border-2 border-[#e2e3e59d] rounded-full font-semibold shadow-lg  btn flex items-center' >
                  Add to Favorite <span className="ml-2" ><Add  /></span></button> */}
                {favoriteVideo.find((v) => v.video_id ==listVideo[22].video_id) ? (
                    <>
                    <button
                    className='text-white backdrop-blur-sm bg-[#ffffff2c] px-4 py-2 border-solid border-2 border-[#e2e3e59d] rounded-full font-semibold shadow-lg mr-5 btn flex items-center'
                      onClick={() => khusus(22)}>
                      Unfavorite <span className="ml-2"><RemoveCircleRoundedIcon/></span>
                    </button>
                    </>
                  ) : (
                    <>
                    <button
                    className='text-white backdrop-blur-sm bg-[#ffffff2c] px-4 py-2 border-solid border-2 border-[#e2e3e59d] rounded-full font-semibold shadow-lg mr-5 btn flex items-center'
                      onClick={() => {khusus(22)}}>
                      Add to Favorite <span className="ml-2"><Add/></span>
                    </button>
                    </>
                  )
                }
              </Box>
            </Box>
          </CardContent>
        </Card>
        {/* Content Carousel */}
        {/* Carousel New Releases*/}
        <Box className="flex flex-col px-5 mt-16">
          <h1 className="text-xl font-semibold mb-5 ml-4">Blockbusters</h1>
          <Slider {...settings} className="" >
            {listVideo.map((vid,i) => {
              if(vid.video_category === 'Blockbusters'){
              return(
                <button key={vid.video_id} className="" onClick={() => {setOpen(true);setIdx(i);setId(listVideo[i].video_id)}}><img src={example} alt="" className="rounded-lg" /></button>
            )}})}
          </Slider>
        </Box>
        {/* Carousel Top Movies */}
        <Box className="flex flex-col px-5 mt-16">
          <h1 className="text-xl font-semibold mb-5 ml-4">Movies</h1>
          <Slider {...settings} className="" >
            {listVideo.map((vid,i) => {
              if(vid.video_category === 'Movies'){
                return(
                  <button key={vid.video_id} className="" onClick={() => {setOpen(true);setIdx(i);setId(listVideo[i].video_id)}}><img src={example} alt="" className="rounded-lg" /></button>
              )}})}
            </Slider>
        </Box>
        {/* Carousel For Kids */}
        <Box className="flex flex-col px-5 mt-16">
          <h1 className="text-xl font-semibold mb-5 ml-4">For Kids</h1>
          <Slider {...settings} className="" >
          {listVideo.map((vid,i) => {
            if(vid.video_category === 'For kids'){
              return(
                <button key={vid.video_id} className="" onClick={() => {setOpen(true);setIdx(i);setId(listVideo[i].video_id)}}><img src={example} alt="" className="rounded-lg" /></button>
            )}})}
          </Slider>
        </Box>
        {/* Modal Pop Up */}
        <Modal open={open} onClose={() => {setOpen(false)}} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color:'white',  overflow: 'hidden' }}  >
          <Sheet  sx={{ width:'80vw',borderRadius: 'md',p: 5,boxShadow: 'lg', bgcolor:'rgb(19, 1, 62) ', color:'white', overflowY: 'auto', maxHeight: '70vh','::-webkit-scrollbar': {
          display: 'none',
        },}}  >
            <ModalClose variant="soft" sx={{ m: 1, bgcolor:'#413988' }} />
            <Box className="flex flex-col">
              <Box className="flex">
                {/* Embed Video */}
                <iframe style={{boxShadow:'-19vw 1vw 90vw 1vw #280185'}}
                  width="100%"
                  height="400rem"
                  src={idx !== null ? listVideo[idx].video_link : 'Link video tidak ditemukan'} className="rounded-lg mt-10 flex"
                  ></iframe>            
              </Box>
              <p className="mt-6">
                <span className="mr-1">
                  <StarRoundedIcon sx={{fontSize:20, color:'#FFEF00'}}/>
                </span>
                {/* Overall Rate */}
                <span className="mr-2 text-xs font- text-gray-400">4.5{'/5'}</span>
                <span className="mr-2 text-xs text-gray-400">┃</span>
                <span className="mr-2 text-xs text-gray-400">{idx !== null ? listVideo[idx].video_category : 'Tidak ada category video'}</span>
                <span className="mr-2 text-xs text-gray-400">┃</span>
                <span className="mr-2 text-xs text-gray-400">{idx !== null ? listVideo[idx].video_genre : 'Tidak ada genre video'}</span>
              </p>
              {/* Judul Movie */}
              <p className="text-5xl mt-2 font-semibold text-violet-100">{idx !== null ? listVideo[idx].video_name : 'Nama Video tidak ditemukan'}</p>
              {/* Desc Movie */}
              <p className="mt-4 text-sm text-violet-200">{idx !== null ? listVideo[idx].video_detail : 'Tidak ada detail video'}</p>
              <Box className="flex flex-row 'mb-3 mt-8">
                <Box className='mr-4'>
                {idx !== null && (
                  favoriteVideo.find((v) => v.video_id ==id) ? (
                    <button
                      className='text-white text-sm bg-[#ffffff2c] px-4 py-2 border-solid rounded-full font-semibold shadow-lg btn flex items-center'
                      onClick={() => favorite()}>
                      Unfavorite <span className="ml-2"><RemoveCircleRoundedIcon/></span>
                    </button>
                  ) : (
                    <button
                      className='text-white text-sm bg-[#ffffff2c] px-4 py-2 border-solid rounded-full font-semibold shadow-lg btn flex items-center'
                      onClick={() => favorite()}>
                      Add to Favorite <span className="ml-2"><Add/></span>
                    </button>
                  )
                )}
                  {/* Button Add to Favorite */}
                  {/* Button Unfavorite */}
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
                  value={isikomen}
                  onChange={(e) => setIsikomen(e.target.value)}
                />
                {/* Button Submit Comments */}
                <button className='text-white text-sm  bg-[#ffffff4a] px-4 py-2 border-solid border- border-[#e2e3e59d] mt-4 rounded-lg font-semibold shadow-lg btn' onClick={() => addcomment(user,id,isikomen)}>Submit</button>
              </Box>
              <Divider sx={{bgcolor:'#ffffff4a',marginTop:4, marginBottom:1}} />
              {/* List Comments */}
              {komen.length > 0 ? 
              komen.map((c,i) => {
                const inputDate = new Date(c.comment_date.toString());
                const formattedDate = inputDate.toLocaleDateString('id-ID', options);
                return(
                <Box key={i} className='mb-6'>
                  <p className="text-md mt-2 font-medium text-violet-100">{c.user_username}</p>
                  <p className="text-[10px] text-gray-400 mt-1">{formattedDate}</p>
                  <p className="mt-2 text-xs text-violet-200">{c.comment_content}</p>
                </Box>
                )}) 
              : ""}
            </Box>
          </Sheet>
        </Modal>
      </Box>
    );
  }
  else{
    return(
      <Box>
      <Box className='mt-8'>
        {/* Filtered Item */}
      {search.map((video,i) =>{
      const videoid = listVideo.find((v) => v.video_id === video.video_id)
      return(
        <Box key={i}>
          <button className='flex flex-row ' onClick={() => {setOpen(true);setIdx(listVideo.findIndex((v) => v.video_id == video.video_id));setId(videoid.video_id)}}>
            <img src={example} alt="" className="rounded-lg w-[18rem]"/>
                <Box className="ml-5 text-left">
                  <p>
                    <span className="mr-2 text-xs text-gray-400">{video.video_category}</span>
                    <span className="mr-2 text-xs text-gray-400">┃</span>
                    <span className="mr-2 text-xs text-gray-400">{video.video_genre}</span>
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
                src={idx !== null ? listVideo[idx].video_link : 'Link video tidak ditemukan'} className="rounded-lg mt-10 flex"
                ></iframe>            
            </Box>
            <p className="mt-6">
              <span className="mr-1">
                <StarRoundedIcon sx={{fontSize:20, color:'#FFEF00'}}/>
              </span>
              {/* Overall Rate */}
              <span className="mr-2 text-xs font- text-gray-400">4.5{'/5'}</span>
              <span className="mr-2 text-xs text-gray-400">┃</span>
              <span className="mr-2 text-xs text-gray-400">{idx !== null ? listVideo[idx].video_category : 'Kategori video tidak ditemukan'}</span>
              <span className="mr-2 text-xs text-gray-400">┃</span>
              <span className="mr-2 text-xs text-gray-400">{idx !== null ? listVideo[idx].video_genre : 'Genre video tidak ditemukan'}</span>
            </p>
            {/* Judul Movie */}
            <p className="text-5xl mt-2 font-semibold text-violet-100">{idx !== null ? listVideo[idx].video_name : 'Nama video tidak ditemukan'}</p>
            {/* Desc Movie */}
            <p className="mt-4 text-sm text-violet-200">{idx !== null ? listVideo[idx].video_detail : 'Detail video tidak ada'}</p>
            <Box className="flex flex-row 'mb-3 mt-8">
              <Box className='mr-4'>
                {/* Button Unfavorite */}
                {idx !== null && (
                  favoriteVideo.find((v) => v.video_id ==id) ? (
                    <button
                      className='text-white text-sm bg-[#ffffff2c] px-4 py-2 border-solid rounded-full font-semibold shadow-lg btn flex items-center'
                      onClick={() => favorite()}>
                      Unfavorite <span className="ml-2"><RemoveCircleRoundedIcon/></span>
                    </button>
                  ) : (
                    <button
                      className='text-white text-sm bg-[#ffffff2c] px-4 py-2 border-solid rounded-full font-semibold shadow-lg btn flex items-center'
                      onClick={() => favorite()}>
                      Add to Favorite <span className="ml-2"><Add/></span>
                    </button>
                  )
                )}              </Box>
              <Box className='flex flex-row'>
                {/* Rating */}
                <Box className='text-white text-sm  bg-[#ffffff2c] px-4 py-2 border-solid rounded-l-full font-semibold shadow-lg   flex items-center' >
                  {/* <Rating name="simple-controlled" value={value} onChange={(event, newValue) => {setValue(newValue)}} /> */}
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
                value={isikomen}
                onChange={(e) => setIsikomen(e.target.value)}
              />
              {/* Button Submit Comments */}
              <button className='text-white text-sm  bg-[#ffffff4a] px-4 py-2 border-solid border- border-[#e2e3e59d] mt-4 rounded-lg font-semibold shadow-lg btn' onClick={() => addcomment(user,id,isikomen)}>Submit</button>
            </Box>
            <Divider sx={{bgcolor:'#ffffff4a',marginTop:4, marginBottom:1}} />
            {/* List Comments */}
            {komen.length > 0 ? 
              komen.map((c,i) => {
                const inputDate = new Date(c.comment_date.toString());
                const formattedDate = inputDate.toLocaleDateString('id-ID', options);
                return(
                <Box key={i} className='mb-6'>
                  <p className="text-md mt-2 font-medium text-violet-100">{c.user_username}</p>
                  <p className="text-[10px] text-gray-400 mt-1">{formattedDate}</p>
                  <p className="mt-2 text-xs text-violet-200">{c.comment_content}</p>
                </Box>
                )}) 
              : ""}
          </Box>
        </Sheet>
      </Modal>
    </Box>
    )
  }
}
 
export default Home;