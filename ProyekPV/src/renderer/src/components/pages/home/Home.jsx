import { useState } from "react";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  Slider  from "react-slick";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import StarIcon from '@mui/icons-material/Star';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './Home.css'
import banner from "../../../assets/img/tenkinoko1.png";
import example from "../../../assets/img/encanto.jpg";

const Home = ({listVideo}) => {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(null);
  
  // function setIdx(id){
  //   const nemu = listVideo.find((v) => v.video_id ==id)
  //   idx=nemu.video_id
  // }
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
  return (
    <Box>
      {/* Banner Cover */}
      <Card sx={{ border: 'none', borderRadius: '2rem', width: '100%', height: '30rem', marginTop:'2rem'}}>
        <CardCover sx={{bgcolor:'rgb(19, 1, 62)'}}>
          <img src={banner} alt="Tenkinoko" className=""/>
        </CardCover>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent:'end', padding: '25px 70px'}}>
          <h1 className="text-white font-semibold text-5xl mb-5">Weathering with You</h1>
          <Box width={'50%'}>
            <p className="text-white text-xs mb-8">"Weathering with You" is a Japanese animated film directed by Makoto Shinkai, known for his visually stunning works. The story revolves around a high school boy named Hodaka Morishima who runs away from his remote island home to Tokyo. There, he encounters a girl named Hina Amano, who possesses a mysterious ability to control the weather.</p>
          </Box>
          {/* Button Watch Now  */}
          <Box className="flex flex-row">
            <Box className='mb-3'>
              <button className='text-white backdrop-blur-sm bg-[#ffffff2c] px-5 py-2 border-solid border-2 border-[#e2e3e59d] rounded-full font-semibold shadow-lg mr-5 btn flex items-center' onClick={() => setOpen(true)}>Watch Now <span className="ml-1"><PlayArrowIcon/></span></button>
            </Box>
            {/* Button Add Favourite  */}
            <Box className='mb-3 flex'>
              <button className='text-white backdrop-blur-sm bg-[#ffffff2c] px-5 py-2 border-solid border-2 border-[#e2e3e59d] rounded-full font-semibold shadow-lg  btn flex items-center' >Add to Favorite <span className="ml-2" ><StarIcon sx={{color:'#FFEF00'}} /></span></button>
            </Box>
          </Box>
        </CardContent>
      </Card>
      {/* Content Carousel */}
      {/* Carousel New Releases*/}
      <Box className="flex flex-col px-5 mt-16">
        <h1 className="text-xl font-semibold mb-5 ml-4">New Releases</h1>
        <Slider {...settings} className="" >
          {listVideo.map((vid,i) => {
            return(
              <button key={vid.video_id} className="" onClick={() => {setOpen(true);setIdx(i)}}><img src={example} alt="" className="rounded-lg" /></button>
          )})}
          {/* <button className="" onClick={() => setOpen(true)}><img src={example} alt="" className="rounded-lg"/></button>
          <button className="" onClick={() => setOpen(true)}><img src={example} alt="" className="rounded-lg"/></button>
          <button className="" onClick={() => setOpen(true)}><img src={example} alt="" className="rounded-lg"/></button>
          <button className="" onClick={() => setOpen(true)}><img src={example} alt="" className="rounded-lg"/></button>
          <button className="" onClick={() => setOpen(true)}><img src={example} alt="" className="rounded-lg"/></button>
          <button className="" onClick={() => setOpen(true)}><img src={example} alt="" className="rounded-lg"/></button>
          <button className="" onClick={() => setOpen(true)}><img src={example} alt="" className="rounded-lg"/></button> */}
        </Slider>
      </Box>
      {/* Carousel Top Movies */}
      <Box className="flex flex-col px-5 mt-16">
        <h1 className="text-xl font-semibold mb-5 ml-4">Top 10 Movies of the Week</h1>
        <Slider {...settings} className="" >
          <button className="" onClick={() => setOpen(true)}><img src={example} alt="" className="rounded-lg"/></button>
          <button className="" onClick={() => setOpen(true)}><img src={example} alt="" className="rounded-lg"/></button>
          <button className="" onClick={() => setOpen(true)}><img src={example} alt="" className="rounded-lg"/></button>
          <button className="" onClick={() => setOpen(true)}><img src={example} alt="" className="rounded-lg"/></button>
          <button className="" onClick={() => setOpen(true)}><img src={example} alt="" className="rounded-lg"/></button>
          <button className="" onClick={() => setOpen(true)}><img src={example} alt="" className="rounded-lg"/></button>
          <button className="" onClick={() => setOpen(true)}><img src={example} alt="" className="rounded-lg"/></button>
          <button className="" onClick={() => setOpen(true)}><img src={example} alt="" className="rounded-lg"/></button>
        </Slider>
      </Box>
      {/* Carousel For Kids */}
      <Box className="flex flex-col px-5 mt-16">
        <h1 className="text-xl font-semibold mb-5 ml-4">For Kids</h1>
        <Slider {...settings} className="" >
          <button className="" onClick={() => setOpen(true)}><img src={example} alt="" className="rounded-lg shadow-2xl"/></button>
          <button className="" onClick={() => setOpen(true)}><img src={example} alt="" className="rounded-lg"/></button>
          <button className="" onClick={() => setOpen(true)}><img src={example} alt="" className="rounded-lg"/></button>
          <button className="" onClick={() => setOpen(true)}><img src={example} alt="" className="rounded-lg"/></button>
          <button className="" onClick={() => setOpen(true)}><img src={example} alt="" className="rounded-lg"/></button>
          <button className="" onClick={() => setOpen(true)}><img src={example} alt="" className="rounded-lg"/></button>
          <button className="" onClick={() => setOpen(true)}><img src={example} alt="" className="rounded-lg"/></button>
          <button className="" onClick={() => setOpen(true)}><img src={example} alt="" className="rounded-lg"/></button>
        </Slider>
      </Box>
      {/* Modal Pop Up */}
      <Modal open={open} onClose={() => setOpen(false)} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color:'white' }} >
        <Sheet sx={{ maxHeight:'80vh',maxWidth: 1000,borderRadius: 'md',p: 3,boxShadow: 'lg', bgcolor:'rgb(19, 1, 62) ', color:'white', overflowY:'auto'}} >
          <ModalClose variant="soft" sx={{ m: 1, bgcolor:'#413988' }}  />
          <Box>
            {console.log(listVideo)}
            <p>{idx !== null ? listVideo[idx].video_name : 'apalah'}</p>
            <iframe width="900" height="500" src={idx !== null ?listVideo[idx].video_link : "yang bener"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>           
            <p>{idx !== null ? listVideo[idx].video_detail : "yakin"}</p>
          </Box>
        </Sheet>
      </Modal>
    </Box>
  );
}
 
export default Home;