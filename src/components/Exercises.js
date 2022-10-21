import React, { useState, useEffect } from 'react'
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  console.log(exercises)
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  const paginate = (e, value) => {
setCurrentPage(value);
window.scroll({ top: 1800, behavior:'smooth'})
  }
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exerciseData = [];
      if(bodyPart === 'all') {
        exerciseData = await fetchData(`http://localhost:5000/exercises`);
      } else {
        exerciseData = await fetchData(`http://localhost:5000/exercises/bodypart/${bodyPart}`);
      }
      setExercises(exerciseData);
    }
    fetchExercisesData();
  }, [bodyPart])
  return (
    <Box id="exercises"
      sx={{ mt: { lg: '110px' } }}
      mt="50px"
      p="20px"
    >{(currentExercises !== [] | bodyPart === "") ? (<Typography variant="h3" mb="46px">Showing Results</Typography>) : ""}
      <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }}
        flexWrap="wrap" justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        )
        )}
      </Stack>
      <Stack mt="6.25rem" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
          color='standard'
          shape="rounded"
          defaultPage={1}
          count={Math.ceil(exercises.length / 9)}
          page={currentPage}
          onChange={paginate}
          size="large" />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises