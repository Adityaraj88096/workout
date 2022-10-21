import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({exerciseDetail}) => {
  // console.log(exerciseDetail);
  
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  // console.log(bodyPart);
  // console.log(gifUrl);
  // console.log(name);
  // console.log(target);
  // console.log(equipment);
  const extraDetail = [{
    icon: BodyPartImage,
    name: bodyPart,
  },
{
  icon: TargetImage,
  name: target,
}, {
  icon: EquipmentImage,
  name: equipment,
}]
  return (
    <Stack gap="60px" 
    sx={{flexDirection: {lg: 'row', sm: 'row', xs: 'column'},
     p: '1.25rem', alignItems: 'center'}}>
      <img src={gifUrl} alt="gif" loading='lazy' className="detail-image" />
      <Stack sx={{ gap: {lg:'2.2rem', xs: '1.25rem' } }}>
        <Typography variant="h3">
          {name}
          </Typography>
        <Typography variant="h6" pr="2rem" fontWeight="500"
        >
          Exercises keep you strong. {name} {`  `}
          is one of the best exercises to target your {target}. It will help you
          improve your mood and gain energy. 
          </Typography>
          {extraDetail.map((item) => (
            <Stack key={item.name} direction="row" gap="24px" alignItems="center">
              <Button sx={{ background: '#fff2db', borderRadius: '50%', width:'100px',
            height: '100px'}}>
              <img src={item.icon} alt={item.icon} style={{width: '50px', height: '50px'}} />
              </Button>
              <Button>
                <Typography textTransform="capitalize" variant="h5">
                {item.name}
                </Typography>
              </Button>
              </Stack>
          ))}
      </Stack>
    </Stack>
  );
}

export default Detail;