import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo.png'
const Footer = () => {
  return (
    <Box mt="5rem" bgcolor="#fff3f4">
      <Stack gap="2.5rem" alignItems="center" px="2.5rem" pt="1.5rem">
        <img src={Logo} alt="logo" width="12.5rem" height="2.5rem" />
        <Typography variant="h5" pb="2.5rem" pt="1.5rem">
          Made with 💪 from Aditya!
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer