import React, { FC } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import Icon from 'assets/icons/gym.png';
import { ExerciseCard } from 'components';
import { IExercise } from 'types/exercise.interface';
import { LeftArrow, RightArrow } from 'ui/Arrows';

interface IHorizontalScrollbar {
  data: string[] | IExercise[];
  // data: any;
  isbodyParts?: boolean;
  setBodyPart?: (item: string) => void;
  bodyPart?: string;
}

const HorizontalScrollbar: FC<IHorizontalScrollbar> = ({
  data,
  bodyPart,
  isbodyParts,
  setBodyPart,
}) => {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      options={{
        ratio: 0.9,
        rootMargin: '5px',
        threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1],
      }}
    >
      {data.map((item: string | IExercise, index) =>
        typeof item === 'string' ? (
          <button
            key={index}
            onClick={() => {
              setBodyPart!(item);
            }}
            className={`flex items-center flex-col cursor-pointer py-3 px-8 whitespace-nowrap w-[140px] h-[92px]
               border-y-4 border-transparent outline-none mx-3 capitalize
               hover:border-y-[rgba(255,37,37,0.62)]  ${
                 bodyPart === item ? 'border-y-[#ff2525]' : 'border-transparent'
               }`}
          >
            <img src={Icon} alt="dumbbell" width={44} height={44} />
            {item}
          </button>
        ) : (
          <ExerciseCard key={index} exercise={item} />
        )
      )}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;

//  <button
//             key={index}
//             onClick={() => {
//               setBodyPart(item);
//             }}
//             className={`flex items-center flex-col cursor-pointer py-3 px-8 whitespace-nowrap w-[140px] h-[92px]
//                border-y-4 border-transparent outline-none mx-3 capitalize
//                hover:border-y-[rgba(255,37,37,0.62)]  ${bodyPart === item ? 'border-y-[#ff2525]' : 'border-transparent'
//               }`}
//           >
//             <img src={Icon} alt="dumbbell" width={44} height={44} />
//             {item}
//           </button>

// !isbodyParts ? (
//   <ExerciseCard exercise={item} />
// ) : (
//   <button
//     key={index}
//     onClick={() => {
//       setBodyPart(item);
//     }}
//     className={`flex items-center flex-col cursor-pointer py-3 px-8 whitespace-nowrap w-[140px] h-[92px]
//        border-y-4 border-transparent outline-none mx-3 capitalize
//        hover:border-y-[rgba(255,37,37,0.62)]  ${
//          bodyPart === item ? 'border-y-[#ff2525]' : 'border-transparent'
//        }`}
//   >
//     <img src={Icon} alt="dumbbell" width={44} height={44} />
//     {item}
//   </button>
// )
