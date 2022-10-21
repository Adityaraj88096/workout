import React from 'react'
import { Box, Stack, Typography} from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader';
const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (

<Box sx={{ mt: { lg: '6.25rem', xs: '0' },
mx: { lg: '4rem', xs: '1rem'}}} >
    <Typography variant="h4" mb={5} ml="2.5rem">Exercises that target the same muscle group</Typography>
    <Stack sx={{ p: '2', position: 'relative'}}>
      {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} />
      : <Loader />}
    </Stack>
    <Typography variant="h4" mb={5} ml="2.5rem">Exercises that use the same Equipment</Typography>
    <Stack sx={{ p: '2', position: 'relative'}}>
      {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} />
      : <Loader />}
    </Stack>
</Box> 
  )
}

export default SimilarExercises