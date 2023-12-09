import { Box, Stack, Typography } from "@mui/material"

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import CopyrightIcon from '@mui/icons-material/Copyright';
import "./footer.css"
import logo from "../../assets/logos.png"
const Footer = () => {
    return (
        <>
            <Box  sx={{ backgroundColor: " #1C0E3A", height: "5%" }}>
<Stack className="logosfoters"  padding="20px" flexDirection="row" gap="15%" alignItems="center" >

                <Stack className="digtal"  marginTop='5%' flexDirection="column" gap="10px">
                <Box >
                        <img style={{ width: "160px" }} src={logo} alt="" />
                    </Box>

                    <Typography fontSize="12px" color="white" fontFamily="Open Sans">
                        Los Angeles, California, USA
                    </Typography>
                    <Stack flexDirection="row" alignItems="center" gap="10px">
                        <InstagramIcon sx={{color:"#FFC738"}} />
                        <FacebookIcon  sx={{color:"#FFC738"}} />
                        <TwitterIcon  sx={{color:"#FFC738"}} />
                    </Stack>

                    <Box  sx={{marginTop:"20px",border:"1px solid #FFC738",width:"100px",textAlign:"center",borderRadius:"500px",color:"black",background:"#FFC738",padding:"10px",fontFamily:"Open Sans"}}>
    
                    Contact Us
 
</Box>

                </Stack>


                <Stack className="txtones" marginTop='5%' gap="20px">
                    <Typography fontFamily="Open Sans" fontSize="14px" color="var(--text-white, #FFF)">
                    Work With Us
                    </Typography>
                    <Typography fontFamily="Open Sans" fontSize="14px" color="var(--text-white, #FFF)">
                    Advertise With Us
                    </Typography>
                    <Typography fontFamily="Open Sans" fontSize="14px" color="var(--text-white, #FFF)">
                    Support Us
                    </Typography>
                    <Typography fontFamily="Open Sans" fontSize="14px" color="var(--text-white, #FFF)">
                    Business Advices
                    </Typography>
                </Stack>

                <Stack className="txtones" marginTop='5%' gap="20px">
                    <Typography fontFamily="Open Sans" fontSize="14px" color="var(--text-white, #FFF)">
                    Private Coaching
                    </Typography>
                    <Typography fontFamily="Open Sans" fontSize="14px" color="var(--text-white, #FFF)">
                    Our Work
                    </Typography>
                    <Typography fontFamily="Open Sans" fontSize="14px" color="var(--text-white, #FFF)">
                    Our Commitment
                    </Typography>
                    <Typography fontFamily="Open Sans" fontSize="14px" color="var(--text-white, #FFF)">
                    Our Team
                    </Typography>
                </Stack>
                <Stack className="threstexts" marginTop='5%' gap="20px">
                    <Typography fontFamily="Open Sans" fontSize="14px" color="var(--text-white, #FFF)">
                    About Us
                    </Typography>
                    <Typography fontFamily="Open Sans" fontSize="14px" color="var(--text-white, #FFF)">
                    FAQs
                    </Typography>
                    <Typography fontFamily="Open Sans" fontSize="14px" color="var(--text-white, #FFF)">
                    Report a Bug
                    </Typography>
                  
                </Stack>

</Stack>
<Box  marginTop="30px" border="1px solid #57577e">

</Box>
<Stack className="copyrightext" marginTop="20px" padding="15px" flexDirection="row" gap="40%">

<Stack  className="m" flexDirection="row" gap="1px">
<Stack alignItems="center" gap="3px" flexDirection="row">

    <CopyrightIcon sx={{color:"white"}}/>
  
<Typography color="white" fontFamily="Open Sans">
2023 Digitalmedia, Inc. -
</Typography>
</Stack>
<Stack flexDirection="row" gap="2px">
<Typography color="white" fontFamily="Open Sans">
Developed By
</Typography>
<Typography  fontFamily="Open Sans" color="#FFC738">
 codewithsadee
</Typography>
</Stack>


</Stack>

<Stack flexDirection="row" gap="15px">
<Typography color="white" fontFamily="Open Sans">
Terms of use
</Typography>
<Typography color="white" fontFamily="Open Sans">
Privacy policy
</Typography>
</Stack>
</Stack>
            </Box>

        </>
    )
}

export default Footer