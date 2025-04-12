/** @format */

import filter from '@assets/icons/filter.svg';
import FilterMenu from '@components/common/FilterMenu';
import { useState } from 'react';

// type FilterBtnProps = {
//   onClick: () => void;
// };

const FilterBtn = () => {
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const toggleFilterMenu = () => {
    setShowFilterMenu(!showFilterMenu);
  };

  return (
    <button
      onClick={toggleFilterMenu}
      className={`relative flex items-center justify-center h-9 w-9 right-10 p-2 rounded-full ${
        showFilterMenu ? 'bg-primary-light-400' : ''
      }`}
    >
      <img
        src={filter}
        alt='filter button'
        className='w-6 h-6 hover:cursor-pointer'
        onClick={() => toggleFilterMenu()}
      />
      <FilterMenu showFilterMenu={showFilterMenu} />
    </button>
  );
};

export default FilterBtn;
