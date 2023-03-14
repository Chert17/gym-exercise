import { useState, useEffect } from 'react';

import { exercisesApi } from 'services/fetchData';
import { IExercise } from 'types/exercise.interface';

export const useExerciseDetailData = (id: string | undefined) => {
  const [exerciseDetail, setExerciseDetail] = useState<IExercise>({
    name: '',
    bodyPart: '',
    equipment: '',
    gifUrl: '',
    id: '',
    target: '',
  });

  useEffect(() => {
    const fetch = async () => {
      const exerciseDetailData = await exercisesApi.exercisesDetail(id);
      setExerciseDetail(exerciseDetailData);
    };
    fetch();
  }, [id]);

  return { exerciseDetail };
};
