import { useContext } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

import LeftArrowIcon from 'assets/icons/left-arrow.png';
import RightArrowIcon from 'assets/icons/right-arrow.png';

export const LeftArrow = () => {
  const { scrollToItem, getPrevElement } = useContext(VisibilityContext);

  return (
    <button
      onClick={() => scrollToItem(getPrevElement(), 'smooth', 'start')}
      className="cursor-pointer bg-transparent border-none p-2 max-[1023.98px]:hidden"
    >
      <img src={LeftArrowIcon} alt="arrow" />
    </button>
  );
};

export const RightArrow = () => {
  const { scrollToItem, getNextElement } = useContext(VisibilityContext);

  return (
    <button
      onClick={() => scrollToItem(getNextElement(), 'smooth', 'end')}
      className="cursor-pointer bg-transparent border-none p-2 max-[1023.98px]:hidden"
    >
      <img src={RightArrowIcon} alt="arrow" />
    </button>
  );
};
