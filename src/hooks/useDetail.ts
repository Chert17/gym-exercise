import { useEffect, useMemo, useState } from 'react';

import { exercisesApi } from 'services/fetchData';
import { IExercise } from 'types/exercise.interface';
import { IExerciseVideo } from 'types/exercises-video.interface';

export const useDetail = (id: string | undefined) => {
  const [exerciseDetail, setExerciseDetail] = useState<IExercise>({
    name: '',
    bodyPart: '',
    equipment: '',
    gifUrl: '',
    target: '',
    id: '',
  });
  const [exerciseVideos, setExerciseVideos] = useState<IExerciseVideo[]>([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState<
    IExercise[]
  >([]);
  const [equipmentExercises, setEquipmentExercises] = useState<IExercise[]>([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDetailData = await exercisesApi.exercisesDetail(id);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await exercisesApi.exerciseVideosData(
        exerciseDetail.name
      );
      setExerciseVideos(exerciseVideosData);

      const targetMuscleExercisesData =
        await exercisesApi.targetMuscleExercisesData(exerciseDetail.target);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await exercisesApi.equimentExercisesData(
        exerciseDetail.equipment
      );
      setEquipmentExercises(equimentExercisesData);
    };

    fetchExercisesData();
  }, [
    exerciseDetail.equipment,
    exerciseDetail.name,
    exerciseDetail.target,
    id,
  ]);

  return useMemo(
    () => ({
      exerciseVideos,
      targetMuscleExercises,
      equipmentExercises,
      exerciseDetail,
    }),
    [equipmentExercises, exerciseDetail, exerciseVideos, targetMuscleExercises]
  );
};
