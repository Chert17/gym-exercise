import React, { FC } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loader: FC = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <InfinitySpin color="#afafaf" />
    </div>
  );
};

export default Loader;
