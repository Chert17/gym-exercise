import React, { FC, useState } from 'react';

import { HeroBanner, SearchExercises, Exercises } from 'components';
import { IExercise } from 'types/exercise.interface';

const Home: FC = () => {
  const [exercises, setExercises] = useState<IExercise[]>([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <div>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </div>
  );
};

export default Home;
