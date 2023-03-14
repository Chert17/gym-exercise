import React, { FC, useMemo } from 'react';

import BodyPartImage from 'assets/icons/body-part.png';
import EquipmentImage from 'assets/icons/equipment.png';
import TargetImage from 'assets/icons/target.png';
import { IExercise } from 'types/exercise.interface';

const Detail: FC<{ exerciseDetail: IExercise }> = ({ exerciseDetail }) => {
  const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;

  const extraDetail = useMemo(
    () => [
      {
        icon: BodyPartImage,
        name: bodyPart,
      },
      {
        icon: TargetImage,
        name: target,
      },
      {
        icon: EquipmentImage,
        name: equipment,
      },
    ],
    [bodyPart, equipment, target]
  );

  return (
    <div className="md:flex items-center justify-center gap-3 mb-10">
      <img src={gifUrl} alt={name} loading="lazy" />

      <div>
        <p className="text-xl font-bold my-3 capitalize">{name}</p>
        <p className="text-[#4F4C4C] text-sm mb-5">
          Exercises keep you strong.{' '}
          <span className="capitalize font-medium">{name}</span> bup is one of
          the best exercises to target your{' '}
          <span className="capitalize font-medium">{target}</span>. It will help
          you improve your mood and gain energy.
        </p>
        <ul className="flex items-center justify-around">
          {extraDetail?.map((item, index) => (
            <li
              key={item.name + index}
              className="flex flex-col items-center justify-center bg-[#FFF2DB] border rounded-[50%] w-[30%] md:w-[110px] h-[90px]"
            >
              <img src={item.icon} alt={bodyPart} width={40} height={40} />
              <p className="break-words text-xs text-center">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Detail;
