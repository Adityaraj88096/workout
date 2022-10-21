import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import BannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg: '212px', xs: '70px'},
        ml: {sm: '50px'}
    }} position="relative">
        <Typography color="#FF2625" fontWeight="600" fontSize="1.7rem">
            Fitness Club
        </Typography>
        <Typography fontWeight={700}
        sx={{fontSize: {lg: '2.65rem', xs: "2.5rem"} }}
        mb="23px" mt="30px"
        >
            Sweat, Smile <br /> and Repeat
            </Typography>
        <Typography
        fontSize="22px"
        lineHeight="35px"
        mb={3}
        >
            Check out the most effective exercises
            </Typography>
            <Button 
            variant="contained" 
            color="error"
            sx={{
                backgroundColor: '#ff2625',
                padding: '10px 20px'
        }}
            >
                Explore Exercises
                </Button>
                <Typography
                fontSize="200px"
                fontWeight={600}
                color="#FF2625"
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', xs:'none'}
                }}
                >
                    Exercises
                </Typography>
                <img src={BannerImage} alt="Banner"
                className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner