import React, { FC } from 'react';

import { IExerciseVideo } from 'types/exercises-video.interface';
import Loader from 'ui/Loader';

interface IExerciseVideos {
  exerciseVideos: IExerciseVideo[];
  name: string;
}

const ExerciseVideos: FC<IExerciseVideos> = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <div>
      <h3 className="font-bold text-lg md:text-2xl mb-3">
        Watch <span className="capitalize text-[#FF2625]">{name}</span> exercise
        videos
      </h3>
      <ul className="flex flex-col gap-4 md:flex-row md:justify-around flex-wrap items-center">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <li
            key={index}
            className="w-[280px] md:w-[310px] flex flex-col self-stretch"
          >
            <a
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
                width={'100%'}
                className="border rounded-3xl"
              />
              <div className="px-4 py-1">
                <p className="text-xl md:text-2xl font-semibold">
                  {item.video.title}
                </p>
                <p className="text-sm">{item.video.channelName}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseVideos;
