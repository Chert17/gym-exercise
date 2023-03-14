import axios from 'axios';
import { IExercise } from 'types/exercise.interface';
import { TypeExercisesVideo } from 'types/exercises-video.interface';

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '16206cc533msh7a9180cb14c4a94p1c3c16jsn7a533d56a995',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '74556c4b1amsh52a126f0b5e2b87p1e15bbjsna2d350947c4f',
  },
};

export const exercisesApi = {
  exercisesData: async () => {
    const { data } = await axios.get<IExercise[]>(
      'https://exercisedb.p.rapidapi.com/exercises',
      exerciseOptions
    );

    return data;
  },

  bodyPartsData: async () => {
    const { data } = await axios.get<string[]>(
      'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
      exerciseOptions
    );

    return data;
  },

  exercisesByBodyPart: async (bodyPart: string) => {
    const { data } = await axios.get<IExercise[]>(
      `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
      exerciseOptions
    );

    return data;
  },

  exercisesDetail: async (id: string | undefined) => {
    const { data } = await axios.get<IExercise>(
      `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
      exerciseOptions
    );

    return data;
  },

  exerciseVideosData: async (name: string) => {
    const { data } = await axios.get<TypeExercisesVideo>(
      `https://youtube-search-and-download.p.rapidapi.com/search?query=${name} exercise`,
      youtubeOptions
    );

    return data.contents;
  },

  targetMuscleExercisesData: async (target: string) => {
    const { data } = await axios.get<IExercise[]>(
      `https://exercisedb.p.rapidapi.com/exercises/target/${target}`,
      exerciseOptions
    );

    return data;
  },

  equimentExercisesData: async (equipment: string) => {
    const { data } = await axios.get<IExercise[]>(
      `https://exercisedb.p.rapidapi.com/exercises/equipment/body weight`,
      exerciseOptions
    );

    return data;
  },
};
