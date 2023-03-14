import { useState, useEffect } from 'react';

import { exercisesApi } from 'services/fetchData';
import { IExercise } from 'types/exercise.interface';

export const useTargetMuscleExercisesData = (target: string) => {
  const [targetMuscleExercises, setTargetMuscleExercises] = useState<
    IExercise[]
  >([]);

  useEffect(() => {
    if (!target) return;

    const fetch = async () => {
      const targetMuscleExercisesData =
        await exercisesApi.targetMuscleExercisesData(target);

      setTargetMuscleExercises(targetMuscleExercisesData);
    };
    fetch();
  }, [target]);

  return { targetMuscleExercises };
};
