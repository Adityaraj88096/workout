import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
import api from '../utils/axios';
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState();
  const [bodyParts, setBodyParts] = useState([]);
  console.log(api);
  useEffect(() => {
    const fetchExerciseData = async () => {
      const {bodyparts} = await fetchData(`http://localhost:5000/bodyparts`);
      console.log(bodyparts);
      setBodyParts(['all', ...bodyparts]);
    }
    fetchExerciseData();
  }, [])

  const handleSearch = async () => {
    try {
      if (search) {
        const exerciseData = await fetchData(`http://localhost:5000/exercises`);
        const searchedExercises = exerciseData.filter(
          (exercise) => {
            return exercise.name.toLowerCase().includes(search)
              || exercise.target.toLowerCase().includes(search)
              || exercise.equipment.toLowerCase().includes(search)
              || exercise.bodyPart.toLowerCase().includes(search)
          }
        );
        setSearch('');
        setExercises(searchedExercises);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
      }
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Stack alignItems="center" sx={{ mt: { lg: "2.4rem", xs: "4rem" } }}
        justifyContent="center" p="1.25rem">
        <Typography fontWeight={700}
          sx={{ fontSize: { lg: '3.75rem', xs: '1.875rem' } }}
          mb="3.125rem" textAlign="center"
        >
          Awesome Exercises You <br />
          Should Know
        </Typography>
        <Box>
          <TextField
            sx={{
              input: {
                fontWeight: '700',
                border: 'none',
                borderRadius: '0.25rem',
              },
              width: { lg: '50rem', xs: '21.875rem' },
              backgroundColor: '#fff',
            }}
            height="7.75rem"
            onChange={(e) => {
              const value = e.target.value.toLowerCase();
              setSearch(value)
            }}
            placeholder="Search Exercises"
            type="text"
          />
          <Button className="search-btn" sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '11rem', xs: '5rem' },
            fontSize: { lg: '1.25rem', xs: '0.875rem' },
            height: '3.5rem',
            position: 'absolute',
          }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
        <Box sx={{
          position: 'relative',
          width: '100vw',
          p: '10%'
        }}>
          <HorizontalScrollbar data={bodyParts} bodyParts bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
        </Box>
      </Stack>
    </>
  )
};

export default SearchExercises