/** @format */

import { locationData } from '@data/locationData';
import Location from './common/Location';
import SwapButton from './common/SwapButton';

const RentLocation = () => {
  return (
    <ul className='flex	items-center justify-between w-full mt-8 max-w-[1312px]'>
      <Location heading={locationData[0].heading} icon={locationData[0].icon} />
      <SwapButton />
      <Location heading={locationData[1].heading} icon={locationData[1].icon} />
    </ul>
  );
};

export default RentLocation;
