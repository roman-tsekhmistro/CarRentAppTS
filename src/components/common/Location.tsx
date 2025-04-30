/** @format */

import { locationSelectOptions } from '@data/locationData';
import { useState } from 'react';
import Select from 'react-select';

type LocationProps = {
  heading: string;
  icon: string;
};

const Location = ({ heading, icon }: LocationProps) => {
  const locationData = [
    {
      heading: 'Locations',
      selectData: locationSelectOptions[0],
    },
    {
      heading: 'Date',
      selectData: locationSelectOptions[1],
    },
    {
      heading: 'Time',
      selectData: locationSelectOptions[2],
    },
  ];

  const [selectedOption] = useState();

  return (
    <div className='flex flex-col w-full max-w-[582px] gap-4 bg-white p-4 rounded-lg shadow-md text-base'>
      <div className='flex gap-2 items-center'>
        <img src={icon} alt={heading} />
        <h3 className='font-semibold'>{heading}</h3>
      </div>
      <ul className='flex gap-4 justify-between items-center'>
        {locationData.map(({ heading, selectData }, index) => (
          <li
            className='flex flex-col gap-2  max-w-[134px] w-full relative after:content-[""] after:absolute after:top-0 after:-right-9 after:w-[1px] after:h-full after:bg-[#C3D4E9] last:after:hidden'
            key={heading + index}
          >
            <p className='font-bold'>{heading}</p>
            <Select defaultValue={selectedOption} options={selectData} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Location;
