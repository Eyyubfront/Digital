import { Box, Stack, Typography } from "@mui/material"
import girls from "../../assets/girls.png"
import iticone from "../../assets/iticone.png"
import itictwo from "../../assets/itictwo.png"
import iticthree from "../../assets/iticthree.png"
import iticfoor from "../../assets/iticfoor.png"
import  "./itworks.css"
const Itworks=()=>{
    return(
        <>
        <div id="itwork">
<Box className="itworkdboxed">

<Stack className="houitworkstext" alignItems="center" marginTop="10%">
    <Typography color="white" variant="h4" textAlign="center" fontFamily="Open Sans">
    How It Works
    </Typography>

    <Typography className="sectext" marginTop="10px" textAlign="center" width="43%" color="var(--text-white-60, rgba(255, 255, 255, 0.60))" fontFamily="Open Sans" >
    Use this section to describe      company and the products you offer. You could share your company’s story and details about why you are in business. 
    </Typography>
</Stack>

<Stack className="itowrksicon"  marginTop="60px" flexDirection="row" alignItems="center">

<Box marginLeft="60px" className="girlsphoto">
<img style={{width:"300px"}} src={girls} alt="" />

</Box>

<Stack   gap="40px" flexDirection="column">

<Stack className="girlsiconone"   flexDirection="row"  gap="15px">
<Stack alignItems="center" flexDirection="column" gap="20px">
<img style={{width:"60px"}} src={iticone} alt="" />
<Typography color="white" variant="h5"  fontFamily="Open Sans">
Ideation
</Typography>
<Typography marginTop="10px" textAlign="center" width="58%"  color="var(--text-white-60, rgba(255, 255, 255, 0.60))" fontFamily="Open Sans" >
Use this section to describe your company and the products you offer. You could share your company’s
    </Typography>
</Stack>
<Stack alignItems="center"  flexDirection="column" gap="20px">
<img style={{width:"60px"}} src={itictwo} alt="" />
<Typography color="white" variant="h5"  fontFamily="Open Sans">
Budget
</Typography>
<Typography marginTop="10px" textAlign="center"width="58%"  color="var(--text-white-60, rgba(255, 255, 255, 0.60))" fontFamily="Open Sans" >
Use this section to describe your company and the products you offer. You could share your company’s
    </Typography>
</Stack>
</Stack>

<Stack   className="girlsicontwo"    flexDirection="row"  gap="15px">
<Stack alignItems="center" flexDirection="column" gap="20px">
<img style={{width:"60px"}} src={iticthree} alt="" />
<Typography color="white" variant="h5"  fontFamily="Open Sans">
Perfomance
</Typography>
<Typography marginTop="10px" textAlign="center" width="58%"  color="var(--text-white-60, rgba(255, 255, 255, 0.60))" fontFamily="Open Sans" >
Use this section to describe your company and the products you offer. You could share your company’s
    </Typography>
</Stack>
<Stack alignItems="center" flexDirection="column" gap="20px">
<img style={{width:"60px"}} src={iticfoor} alt="" />
<Typography color="white" variant="h5"  fontFamily="Open Sans">
Speed
</Typography>
<Typography marginTop="10px" textAlign="center" width="58%" color="var(--text-white-60, rgba(255, 255, 255, 0.60))" fontFamily="Open Sans" >
Use this section to describe your company and the products you offer. You could share your company’s
    </Typography>
</Stack>
</Stack>
</Stack>
</Stack>
</Box>


        </div>
        
        </>
    )
}
export default Itworks