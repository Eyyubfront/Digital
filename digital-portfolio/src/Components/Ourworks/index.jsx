
import { Box,Button,Stack,Typography } from "@mui/material"
import bacgourworks from "../../assets/process-bg.png"
import ourphotone from "../../assets/work-1.jpg"
import ourphottwo from "../../assets/work-2.jpg"
import ourphotthree from "../../assets/work-3.jpg"
import "./ourworks.css"
const Ourworks=()=>{
    return(
        <>
        <div id="ourwork">
            <Box >

           <Box  sx={{backgroundImage:`url(${bacgourworks})`,backgroundRepeat:"no-repeat",height:"128vh",marginTop:"40px"}}>
            <Stack  gap="10px" flexDirection="column" alignItems="center">

           <Stack  className="ourworkstext" alignItems="center" marginTop="10px">
    <Typography marginTop="10%" color="white" variant="h4" textAlign="center" fontFamily="Open Sans">
   Our works
    </Typography>

    <Typography  className="sectext" marginTop="10px" textAlign="center" width="55%" color="var(--text-white-60, rgba(255, 255, 255, 0.60))" fontFamily="Open Sans" >
    Use this section to describe      company and the products you offer. You could share your company’s story and details about why you are in business. 
    </Typography>
</Stack>



<Stack className="ourworkphotosall" marginTop="30px" alignItems="center" justifyContent="center" flexDirection="row" gap="40px">


<Stack alignItems="center" gap="10px">
    <img style={{width:"250px",borderRadius:"10%"}} src={ourphotone} alt="" />
<Typography fontFamily="Open Sans" variant="h6" color='white'>
Product Design
</Typography>
    <Typography color="var(--text-white-60, rgba(255, 255, 255, 0.60))" fontFamily="Open Sans" >
    Use this section to describe your 
    </Typography>

</Stack>

<Stack alignItems="center" gap="10px">
    <img style={{width:"250px",borderRadius:"10%"}} src={ourphottwo} alt="" />
<Typography fontFamily="Open Sans" variant="h6" color='white'>
App Development
</Typography>
    <Typography color="var(--text-white-60, rgba(255, 255, 255, 0.60))" fontFamily="Open Sans" >
    Use this section to describe your 
    </Typography>

</Stack>


<Stack alignItems="center" gap="10px">
    <img style={{width:"250px",borderRadius:"10%"}} src={ourphotthree} alt="" />
<Typography fontFamily="Open Sans" variant="h6" color='white'>
Virtual Reality
</Typography>
    <Typography color="var(--text-white-60, rgba(255, 255, 255, 0.60))" fontFamily="Open Sans" >
    Use this section to describe your 
    </Typography>

</Stack>





</Stack>


<Box className="morebtn" sx={{marginTop:"20px",border:"1px solid #FFC738",width:"100px",textAlign:"center",borderRadius:"500px",color:"black",background:"#FFC738",padding:"10px",fontFamily:"Open Sans"}}>
    
        See More
 
</Box>
            </Stack>
           </Box>
            </Box>



        </div>
        
        </>
    )
}
export default Ourworks