import { useState, useEffect } from 'react';

import { exercisesApi } from 'services/fetchData';

export const useBodyParts = () => {
  const [bodyParts, setBodyParts] = useState<string[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await exercisesApi.bodyPartsData();
      setBodyParts(['all', ...data]);
    };

    fetch();
  }, []);

  return { bodyParts };
};
