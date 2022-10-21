import React from 'react'
import { Stack, Typography} from '@mui/material';
import Icon from '../assets/icons/gym.png';
const BodyPart = ({ item, setBodyPart, bodyPart}) => {
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
            borderTop: bodyPart === item ? '4px solid #ff2625' : '',
            backgroundColor: '#fff',
            borderBottomLeftRadius: '1.25rem',
            width: '16.875rem',
            height: '18.125rem',
            cursor: 'pointer',
            gap: '2.875rem'
        }
    }
    onClick={() => {
      console.log(item);
      setBodyPart(item);
      console.log(bodyPart);
      window.scrollTo({top: 1800, left: 100, behavior: 'smooth' })
    }}
    >
        <img src={Icon} alt="dumbbell" style={{ width:'2.5rem', height: '2.5rem'}} />
        <Typography fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
        >{item}</Typography>
    </Stack>
  )
}

export default BodyPart