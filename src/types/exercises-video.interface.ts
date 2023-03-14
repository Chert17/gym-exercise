export interface IExerciseVideo {
  video: {
    channelName: string;
    thumbnails: [{ url: string }];
    title: string;
    videoId: string;
  };
}

export type TypeExercisesVideo = {
  contents: IExerciseVideo[];
};
