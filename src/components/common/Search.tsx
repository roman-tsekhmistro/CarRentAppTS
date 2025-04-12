/** @format */

import search from '@assets/icons/search-normal.svg';
import FilterBtn from '@components/common/FilterBtn';

const Search = () => {
  return (
    <div className='relative flex items-center justify-center'>
      <img
        src={search}
        alt='search button'
        className='absolute w-6 h-6 left-5'
      />
      <input
        type='text'
        className='rounded-full border border-[#C3D4E9] h-11 w-screen max-w-[492px] pl-16 pr-4 focus:outline-none focus:border-primary-default-500 focus:ring-1 text-base font-normal text-secondary-light-400 placeholder:text-[#C3D4E9]'
        placeholder='Search something here'
      />
      <FilterBtn />
    </div>
  );
};

export default Search;
