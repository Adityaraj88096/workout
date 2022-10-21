import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exercise = process.env.REACT_APP_DB_LINK
      const exerciseDbUrl = fetchData(`${exercise}/exercises`);
      const exerciseDetailData = await fetchData(`${exercise}/exercise/${id}`);
      const targetMuscleExercisesData = await fetchData(`${exercise}/exercises/target/${exerciseDetailData.target}`);
      setTargetMuscleExercises(targetMuscleExercisesData);
      const equipmentExercisesData = await fetchData(`${exercise}/exercises/equipment/${exerciseDetailData.equipment}`);
      setEquipmentExercises(equipmentExercisesData);
      console.log(exerciseDetailData);
      setExerciseDetail(exerciseDetailData);
    }
    fetchExercisesData();
  }, [id])
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
}

export default ExerciseDetail