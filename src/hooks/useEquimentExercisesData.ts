import { useState, useEffect } from 'react';

import { exercisesApi } from 'services/fetchData';
import { IExercise } from 'types/exercise.interface';

export const useEquimentExercisesData = (equipment: string) => {
  const [equipmentExercises, setEquipmentExercises] = useState<IExercise[]>([]);

  useEffect(() => {
    if (!equipment) return;

    const fetch = async () => {
      const equimentExercisesData = await exercisesApi.equimentExercisesData(
        equipment
      );

      setEquipmentExercises(equimentExercisesData);
    };
    fetch();
  }, [equipment]);

  return { equipmentExercises };
};
