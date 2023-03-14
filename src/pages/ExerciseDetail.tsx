import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Detail, ExerciseVideos, SimilarExercises } from 'components';
import {
  useEquimentExercisesData,
  useExerciseDetailData,
  useExerciseVideosData,
  useTargetMuscleExercisesData,
} from 'hooks';

const ExerciseDetail: FC = () => {
  const { id } = useParams();

  const { exerciseDetail } = useExerciseDetailData(id);
  const { name, target, equipment } = exerciseDetail;

  const { exerciseVideos } = useExerciseVideosData(name);
  const { targetMuscleExercises } = useTargetMuscleExercisesData(target);
  const { equipmentExercises } = useEquimentExercisesData(equipment);

  return (
    <div className="mt-6">
      <Link to="/" className="text-[#FF2625] m-2 cursor-pointer">
        Go back
      </Link>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={name} />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </div>
  );
};

export default ExerciseDetail;
