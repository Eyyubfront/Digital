import { Box, Button, Container, Stack, Typography, Grid, AppBar } from "@mui/material";
import BurgerMenu from "../Burgermenu";
import * as React from 'react';
import logo from "../../assets/logos.png"
import  "./module.css"
import boysbacg from "../../assets/hero-bg.png"
const Navbar = () => {
    return (
        <>
     

            <Stack padding="12px" className="e" alignItems="center" flexDirection="row" justifyContent="space-between">
                <Stack className="burgermenunavbar" gap="50px" padding="7px" alignItems="center" flexDirection="row"  >
                    <Box >
                        <img style={{ width: "160px" }} src={logo} alt="" />
                    </Box>
                    <Stack
                    
                        gap="30px"
                        flexDirection="row"
                        sx={{ display: { xs: "none", md: "flex" } }}
                    >
                        <a style={{fontSize:"14px", color: "var(--text-white-60, rgba(255, 255, 255, 0.60))", textDecoration: "none", fontFamily: "Open Sans" }} href="#itwork">
                            <div>
                                <h3>How It Works</h3>
                            </div>
                        </a>
                        <a style={{fontSize:"14px", color: "var(--text-white-60, rgba(255, 255, 255, 0.60))", textDecoration: "none", fontFamily: "Open Sans" }} href="#ourwork">
                            <div>
                                <h3>Our Work</h3>
                            </div>
                        </a>
                        < a style={{ fontSize:"14px",color: "var(--text-white-60, rgba(255, 255, 255, 0.60))", fontFamily: "Open Sans" }}>

                            <div>
                                <h3>Pricing</h3>
                            </div>
                        </a>
                        < a style={{fontSize:"14px", color: "var(--text-white-60, rgba(255, 255, 255, 0.60))", fontFamily: "Open Sans" }}>

                            <div>
                                <h3>About Us</h3>
                            </div>
                        </a>
                    </Stack>
                    <BurgerMenu />
                </Stack>
                <Box className="trybtn" fontFamily="Open Sans" color="white" padding="7px" width="100px" textAlign="center" borderRadius="500px" border="2px solid var(--border-blue-jeans, #02A4FF)">
                    Try It Now
                </Box>
            </Stack>
      
        </>
    )
}

export default Navbar