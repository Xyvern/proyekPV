import { useEffect, useRef, useState } from "react";
import { Box, Button, Divider, Rating } from "@mui/material";
import Select, { selectClasses } from '@mui/joy/Select';
import { Textarea } from "@mui/joy";
import Option from '@mui/joy/Option';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import IconButton from '@mui/joy/IconButton';
import CloseRounded from '@mui/icons-material/CloseRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import Add from '@mui/icons-material/AddCircleRounded';
import example from "../../../assets/img/encanto.jpg";

//banner video
import fastx from "../../../assets/banner/fastx.png";
import bluebeetle from "../../../assets/banner/bluebeetle.jpg";
import granturismo from "../../../assets/banner/granturismo.jpg";
import mario from "../../../assets/banner/mario.jpg";
import ahauntinginvenice from "../../../assets/banner/ahauntinginvenice.jpg";
import lalaland from "../../../assets/banner/lalaland.jpg";
import poltergeist from "../../../assets/banner/poltergeist.jpg";
import interstellar from "../../../assets/banner/interstellar.jpeg";
import littlemermaid from "../../../assets/banner/littlemermaid.webp";
import oppenheimer from "../../../assets/banner/oppenheimer.jpg";
import infinitywar from "../../../assets/banner/infinitywar.webp";
import boboiboy from "../../../assets/banner/boboiboy.jpg";
import thenun from "../../../assets/banner/thenun.jpg";
import missionimpossible from "../../../assets/banner/missionimpossible.jpg";
import spongebob from "../../../assets/banner/spongebob.jpg";
import ted2 from "../../../assets/banner/ted2.jpg";
import transformer from "../../../assets/banner/transformer.jpg";
import httyd from "../../../assets/banner/httyd.jpeg";
import wpa from "../../../assets/banner/warplanetapes.webp";
import bighero6 from "../../../assets/banner/bighero6.jpg";
import motoe from "../../../assets/banner/murderontheorientexpress.jpg";
import spiderman from "../../../assets/banner/spiderman.webp";
import tenkinoko from "../../../assets/banner/tenkinoko.jpg";


const Filter = ({hasilfilter,filter,listVideo, user, favoriteVideo, removefavorite,komen,favoritev,loadkomen,search}) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(null)

  const [category, setCategory] = useState('');
  const [genre, setGenre] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
      }, [index,category,genre,sort]);

  //tambahan buat modal?
  const [idx, setIdx] = useState(null);
  const [value, setValue] = useState('');
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
  //end of tambahan modal

  // ini nanti di kali 3 sama diganti di setiap select sama fungsi close "X" nya ya sist :) aku mager
  const action = useRef(null);
  return (
    <Box>
      {/* Content Select */}
      <Box className="flex flex-row gap-4">
        {/* Select Category */}
        <Select
        action={action}
        category={category}
        placeholder="Category"
        onChange={(e, newCategory) => setCategory(newCategory)}
        {...(category && {
          endDecorator: (
            <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            onMouseDown={(event) => {
              event.stopPropagation();
            }}
            onClick={() => {
              setCategory(null);
              action.current.focusVisible();
            }}
              >
              <CloseRounded />
            </IconButton>
          ),
          indicator: null,
        })}

        sx={{ width:'14vw', color:'rgb(19, 1, 62)', bgcolor:"whitesmoke" }}>
          <Option value="Blockbusters">Blockbusters</Option>
          <Option value="Movies">Movies</Option>
          <Option value="For kids">For Kids</Option>
          <Option value="Musical">Musical</Option>
          <Option value="Critically Acclaimed">Critically Acclaimed</Option>
        </Select>
        {/* Select Genre */}
        <Select
        action={action}
        genre={genre}
        placeholder="Genre"
        onChange={(e, newGenre) => setGenre(newGenre)}
        {...(genre && {
          endDecorator: (
            <IconButton
            size="sm"
            variant="plain"
              color="neutral"
              onMouseDown={(event) => {
                event.stopPropagation();
              }}
              onClick={() => {
                setGenre(null);
                action.current.focusVisible();
              }}
              >
              <CloseRounded />
            </IconButton>
          ),
          indicator: null,
        })}
        
        sx={{ width:'14vw', color:'rgb(19, 1, 62)', bgcolor:"whitesmoke" }}>
          <Option value="Romance">Romance</Option>
          <Option value="Drama">Drama</Option>
          <Option value="Action">Action</Option>
          <Option value="Comedy">Comedy</Option>
          <Option value="Horror">Horror</Option>
          <Option value="Sci-Fi">Sci-Fi</Option>
          <Option value="Animation">Animation</Option>
          <Option value="Crime">Crime</Option>
        </Select>
        {/* Select Sort by */}
        <Select
        action={action}
        sort={sort}
        placeholder="Sort by"
        onChange={(e, newSort) => setSort(newSort)}
        {...(sort && {
          endDecorator: (
            <IconButton
            size="sm"
            variant="plain"
              color="neutral"
              onMouseDown={(event) => {
                event.stopPropagation();
              }}
              onClick={() => {
                setSort(null);
                action.current.focusVisible();
              }}
              >
              <CloseRounded />
            </IconButton>
          ),
          indicator: null,
        })}
        
        sx={{ width:'10vw', color:'rgb(19, 1, 62)', bgcolor:"whitesmoke" }}>
          <Option value="asc">A-Z</Option>
          <Option value="desc">Z-A</Option>
          
        </Select>
        <Box className='mr-4'>
          {/* Button Filter */}
          <button className='text-white text-sm  bg-[#ffffff2c] pr-2 pl-4 py-2 border-solid rounded-lg font-semibold shadow-lg  btn' onClick={()=>hasilfilter(genre,category,sort)}>Filter<span className="ml-2" ></span></button>
        </Box>
      </Box>
      {/* Content List Hasil Filter */}
      {filter.length > 0? 
      filter.map((video, i)=>{
        const videoid = listVideo.find((v) => v.video_id === video.video_id)
        return(<Box key={i} className='mt-12'>
        {/* Filtered Item */}
        <Box>
          <button className='flex flex-row ' onClick={() => {setOpen(true),setIndex(i),setIdx(listVideo.findIndex((v) => v.video_id == video.video_id));setId(videoid.video_id)}}>
            <img src={video.video_banner} alt="" className="rounded-lg w-[18rem]"/>
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
      </Box>)
      })
     :""}
     {filter.length > 0 ? <Modal open={open} onClose={() => {setOpen(false)}} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color:'white',  overflow: 'hidden' }}  >
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
                  src={index != null ? filter[index].video_link : 'Link video tidak ditemukan'} className="rounded-lg mt-10 flex"
                  ></iframe>            
              </Box>
              <p className="mt-6">
                <span className="mr-1">
                  <StarRoundedIcon sx={{fontSize:20, color:'#FFEF00'}}/>
                </span>
                {/* Overall Rate */}
                <span className="mr-2 text-xs font- text-gray-400">4.5{'/5'}</span>
                <span className="mr-2 text-xs text-gray-400">┃</span>
                <span className="mr-2 text-xs text-gray-400">{index != null ? filter[index].video_category : 'Tidak ada category video'}</span>
                <span className="mr-2 text-xs text-gray-400">┃</span>
                <span className="mr-2 text-xs text-gray-400">{index != null ? filter[index].video_genre : 'Tidak ada genre video'}</span>
              </p>
              {/* Judul Movie */}
              <p className="text-5xl mt-2 font-semibold text-violet-100">{index != null ? filter[index].video_name : 'Nama Video tidak ditemukan'}</p>
              {/* Desc Movie */}
              <p className="mt-4 text-sm text-violet-200">{index != null ? filter[index].video_detail : 'Tidak ada detail video'}</p>
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
                {console.log(user)}
                {console.log(id)}
                {console.log(isikomen)}
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
        </Modal>:''}
    </Box>
  );
}

export default Filter;

