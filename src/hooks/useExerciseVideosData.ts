import { useState, useEffect } from 'react';

import { exercisesApi } from 'services/fetchData';
import { IExerciseVideo } from 'types/exercises-video.interface';

export const useExerciseVideosData = (name: string) => {
  const [exerciseVideos, setExerciseVideos] = useState<IExerciseVideo[]>([]);

  useEffect(() => {
    if (!name) return;

    const fetch = async () => {
      const exerciseVideosData = await exercisesApi.exerciseVideosData(name);

      setExerciseVideos(exerciseVideosData);
    };
    fetch();
  }, [name]);

  return { exerciseVideos };
};
