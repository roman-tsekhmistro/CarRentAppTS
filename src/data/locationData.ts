/** @format */

import leftLocationMark from '../assets/icons/left-location-mark.png';
import rightLocationMark from '../assets/icons/right-location-mark.png';

const locationData = [
  {
    heading: 'Pick - Up',
    icon: leftLocationMark,
  },
  {
    heading: 'Drop - Off',
    icon: rightLocationMark,
  },
];

const locationSelectOptions = [
  [
    { label: 'Kharkiv', value: 'kharkiv' },
    { label: 'Kyiv', value: 'kyiv' },
    { label: 'Lviv', value: 'lviv' },
  ],
  [
    { label: '23.03', value: '23.03' },
    { label: '23.04', value: '23.04' },
    { label: '23.05', value: '23.05' },
  ],
  [
    { label: '09:00', value: '09:00' },
    { label: '12:00', value: '12:00' },
    { label: '18:00', value: '18:00' },
  ],
];

export { locationData, locationSelectOptions };
