import React, { FC } from 'react';

import { HorizontalScrollbar } from 'components';
import { IExercise } from 'types/exercise.interface';
import Loader from 'ui/Loader';

interface ISimilarExercises {
  targetMuscleExercises: IExercise[];
  equipmentExercises: IExercise[];
}

const SimilarExercises: FC<ISimilarExercises> = ({
  targetMuscleExercises,
  equipmentExercises,
}) => {
  return (
    <div className="mt-10">
      <h3 className="font-bold text-lg md:text-2xl mb-3">
        Similar <span>Target Muscle</span> exercises
      </h3>

      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}

      <h3 className="font-bold text-lg md:text-2xl mb-3">
        Similar <span>Equipment</span> exercises
      </h3>
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollbar data={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SimilarExercises;
