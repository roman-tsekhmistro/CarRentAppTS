/** @format */

import CarCard from '@components/common/CarCard';
import HeroCards from '@components/HeroCards';
import RentLocation from '@components/RentLocation';
import { useEffect } from 'react';
import { fetchCarsWithAxios } from 'src/utils';

const Main = () => {
  useEffect(() => {
    fetchCarsWithAxios();
  }, []);
  return (
    <div className='flex flex-col items-center justify-start h-screen w-full'>
      <HeroCards />
      <RentLocation />
      <CarCard />
    </div>
  );
};

export default Main;
