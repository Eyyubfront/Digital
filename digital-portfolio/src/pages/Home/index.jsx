import Boysicon from "../../Components/Boysicons";
import Navbar from "../../Components/Navbar"
import { Box } from "@mui/material";
import boysbacg from "../../assets/hero-bg.png"
import Itworks from "../../Components/Itworks";
import Ourworks from "../../Components/Ourworks";
import Footer from "../../Components/Footer";
const Home = () => {
  return (
    <>
      <Box className="allpagecolor" sx={{ background: "var(--background-russian-violet, #170B2F)", padding: "15px", height: "340vh" }} >
        <Navbar />
        <Box className="boysbacgcolor" sx={{ backgroundColor: " #1C0E3A", padding: "2px", backgroundImage: `url(${boysbacg})`, height: "108vh", width: "102%", marginLeft: "-15px" }} >
          <Boysicon />
          <Itworks />
          <Ourworks />
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Home