/** @format */

import HeroCards from '@components/HeroCards';
import RentLocation from '@components/RentLocation';

const Main = () => {
  return (
    <div className='flex flex-col items-center justify-start h-screen w-full'>
      <HeroCards />
      <RentLocation />
    </div>
  );
};

export default Main;
