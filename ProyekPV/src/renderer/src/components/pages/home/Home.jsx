import { Box } from "@mui/material";
import banner from "../../../assets/img/tenkinoko1.png";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarIcon from '@mui/icons-material/Star';
import { useState } from "react";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      {/* Banner Cover */}
      <Card sx={{ border: 'none', borderRadius: '2rem', width: '100%', height: '30rem' }}>
        <CardCover sx={{bgcolor:'rgb(19, 1, 62)'}}>
          <img src={banner} alt="Tenkinoko" className=""/>
        </CardCover>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent:'end', padding: '25px 70px'}}>
          <h1 className="text-white font-semibold text-5xl mb-5">Weathering with You</h1>
          <Box width={'50%'}>
            <p className="text-white text-xs mb-8">"Weathering with You" is a Japanese animated film directed by Makoto Shinkai, known for his visually stunning works. The story revolves around a high school boy named Hodaka Morishima who runs away from his remote island home to Tokyo. There, he encounters a girl named Hina Amano, who possesses a mysterious ability to control the weather.</p>
          </Box>
          <Box className="flex flex-row">
            <Box className='mb-3'>
              <button className='text-white backdrop-blur-sm bg-[#ffffff2c] px-5 py-2 border-solid border-2 border-[#e2e3e59d] rounded-full font-semibold shadow-lg mr-5 btn'  onClick={() => setOpen(true)}>Watch Now <span><PlayArrowIcon/></span></button>
            </Box>
            <Box className='mb-3'>
              <button className='text-white backdrop-blur-sm bg-[#ffffff2c] px-5 py-2 border-solid border-2 border-[#e2e3e59d] rounded-full font-semibold shadow-lg  btn' >Add to Favorites <span><StarIcon/></span></button>
            </Box>
          </Box>
        </CardContent>
      </Card>
      {/* Modal Pop Up */}
      <Modal open={open} onClose={() => setOpen(false)} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color:'white' }} >
        <Sheet sx={{ maxWidth: 1000,borderRadius: 'md',p: 3,boxShadow: 'lg', bgcolor:'rgb(19, 1, 62) ', color:'white'}} >
          <ModalClose variant="soft" sx={{ m: 1, bgcolor:'#413988' }}  />
          <Box>
            <p>Judul_Movie</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores doloribus dolore praesentium laborum iste magnam nisi cumque consequuntur obcaecati ducimus.</p>
          </Box>
        </Sheet>
      </Modal>
    </Box>
    
  );
}
 
export default Home;