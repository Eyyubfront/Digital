import { Box, Stack, Typography, TextField, Button } from "@mui/material"
import * as React from 'react';
import herobaner from "../../assets/boysd.png"
import iconone from "../../assets/iconone.png"
import icontwo from "../../assets/icontwo.png"
import iconthree from "../../assets/iconthree.png"
import "./boysicon.css"
const Boysicon = () => {
    return (
        <>
            <Box  className="boysiconmargn" marginTop="90px" >
                <Stack className="takeboy" marginLeft="-8%" marginTop='13%' alignItems="center" flexDirection="row" >

                    <Stack marginTop="8%" className="careboxs" marginLeft="20%" gap="40px" >
                        <Typography className="takecaretext" fontFamily="Open Sans" color="white" width="30%" variant="h3">
                            We Take Care of Your Brand
                        </Typography>

                        <Typography className="sectiontext" marginTop="20px" fontFamily="Open Sans" color="var(--text-white-60, rgba(255, 255, 255, 0.60))" width="45%">
                            Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business.
                        </Typography>

                        <Stack className="inputbtn" flexDirection="row" gap="15px" alignItems='center'>
                           <input className="inputs" style={{padding:"13px",border:"none",width:"250px",borderRadius:"500px",backgroundColor:"rgb(48 46 46)"}} type="text" placeholder="Enter Your Email" />
                      <Box className="btnstalk" sx={{textAlign:"center", background: "var(--background-sunglow, #FFC738)", fontSize: "15px", fontFamily: "Open Sans", width: "100px", color: "black", borderRadius: "500px", padding: "10px" }}>
                        Lets Lalk
                        
                        </Box>
                        </Stack>

                    </Stack>


                    <Box  className="boysiconboxsd"  marginLeft="-30%" >
                        <Stack className="iconsd" sx={{position:"absolute",top:"68%",zIndex:99999999,right:"35%"}} gap="15px" flexDirection="row" alignItems="center">

                        <Box>
                            <img style={{ width: "60px" }} src={icontwo} alt="" />
                        </Box>
                        <Stack flexDirection="column" gap="100px">
                            <img style={{ width: "60px" }} src={iconone} alt="" />
                        <img style={{ width: "60px" }} src={iconthree} alt="" />
                        </Stack>
                        </Stack>
                        <img className="boysherob" style={{ width: "350px",position:"relative" }} src={herobaner} alt="" />

                    </Box>
                </Stack>


            </Box>

        </>
    )
}

export default Boysicon