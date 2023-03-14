import React, { FC, memo, useEffect, useState } from 'react';

import { Pagination } from '@mui/material';
import { ExerciseCard } from 'components';
import { exercisesApi } from 'services/fetchData';
import { IExercise } from 'types/exercise.interface';
import Loader from 'ui/Loader';

interface IExercises {
  setExercises: (searchedExercises: IExercise[]) => void;
  bodyPart: string;
  exercises: IExercise[];
}
const Exercises: FC<IExercises> = ({ bodyPart, exercises, setExercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetch = async () => {
      let exercisesData = [];
      if (bodyPart === 'all') {
        exercisesData = await exercisesApi.exercisesData();
      } else {
        exercisesData = await exercisesApi.exercisesByBodyPart(bodyPart);
      }
      setExercises(exercisesData);
    };
    fetch();
  }, [bodyPart, setExercises]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (_: any, value: React.SetStateAction<number>) => {
    setCurrentPage(value);
    window.scrollTo({ top: 700, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <div id="exercises" className="mt-12">
      <h3 className="font-bold text-2xl">Showing Results</h3>
      <ul className="flex flex-col gap-4 md:flex-row md:flex-wrap justify-around">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </ul>
      <div className="flex items-center justify-center my-5">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </div>
    </div>
  );
};
export default memo(Exercises);
