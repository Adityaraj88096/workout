import React from 'react';
import { Link } from 'react-router-dom'
import { Typography, Stack, Button } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button sx={{
          ml: '1.25rem', color: '#fff', background: '#ffa9a9',
          fontSize: '0.875rem', borderRadius: '1.25rem', textTransform: 'capitalize'
        }}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{
          ml: '1.25rem', color: '#fff', background: '#fcc757',
          fontSize: '0.875rem', borderRadius: '1.25rem', textTransform: 'capitalize'
        }}>
          {exercise.target}
        </Button>
      </Stack>
        <Typography 
        ml="21px" color="#000" fontWeight="bold" mt="11px"
          pb="10px" textTransform="capitalize" fontSize="1.25rem"
        >
          {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard