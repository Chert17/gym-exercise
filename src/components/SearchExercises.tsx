import React, { FC, useState } from 'react';

import { HorizontalScrollbar } from 'components';
import { useSearchExercises, useBodyParts } from 'hooks';
import { IExercise } from 'types/exercise.interface';

interface ISearchExercises {
  setExercises: (searchedExercises: IExercise[]) => void;
  bodyPart: string;
  setBodyPart: (item: string) => void;
}

const SearchExercises: FC<ISearchExercises> = ({
  setExercises,
  bodyPart,
  setBodyPart,
}) => {
  const [search, setSearch] = useState('');

  const { searchedExercises, handleSearchExercises } =
    useSearchExercises(search);

  const { bodyParts } = useBodyParts();

  const handleSearch = () => {
    if (!search.trim()) return;

    handleSearchExercises();
    setExercises(searchedExercises);
    setSearch('');
  };

  return (
    <div>
      <h3 className="text-center font-bold text-3xl lg:text-4xl mb-6">
        Awesome Exercises You <br /> Should Know
      </h3>
      <label className="relative flex border-solid border-stone-500 border-[1px] rounded mb-10">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          className="font-bold p-4 w-full"
          height={76}
        />
        <button
          onClick={handleSearch}
          type="submit"
          className="absolute right-0 h-full p-4 lg:px-7 text-center bg-[#FF2625] text-white text-xl cursor-pointer"
        >
          Search
        </button>
      </label>
      <div>
        <HorizontalScrollbar
          data={bodyParts}
          isbodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </div>
    </div>
  );
};

export default SearchExercises;
