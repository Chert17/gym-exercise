import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { IExercise } from 'types/exercise.interface';

const ExerciseCard: FC<{ exercise: IExercise }> = ({
  exercise: { id, gifUrl, name, target, bodyPart },
}) => {
  return (
    <li className="w-[280px] cursor-pointer list-none" draggable="false">
      <Link to={`/exercise/${id}`}>
        <img src={gifUrl} alt={name} loading="lazy" />
        <div className="flex gap-3 mb-2">
          <div className="bg-yellow-200/80 rounded-2xl p-2">{bodyPart}</div>
          <div className="bg-red-200/80 rounded-2xl p-2">{target}</div>
        </div>
        <p className="font-bold">{name}</p>
      </Link>
    </li>
  );
};

export default ExerciseCard;
