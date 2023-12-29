import { Box } from "@mui/material";
// import banner from "../assets/img/tenkinoko.png";
import img from './tenkinoko.png'


const Home = () => {
  return (
    <Box>
      <p>Ini home</p>
      <img src={img}  width="500" height="600"></img>
    </Box>
  );
}
 
export default Home;