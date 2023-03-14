import { useState } from 'react';

import { exercisesApi } from 'services/fetchData';
import { IExercise } from 'types/exercise.interface';

export const useSearchExercises = (search: string) => {
  const [searchedExercises, setSearchedExercises] = useState<IExercise[]>([]);

  const handleSearchExercises = async () => {
    if (search.trim()) {
      const data = await exercisesApi.exercisesData();

      const filteredData = data.filter(
        item =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      setSearchedExercises(filteredData);
    }
  };

  return { searchedExercises, handleSearchExercises };
};
