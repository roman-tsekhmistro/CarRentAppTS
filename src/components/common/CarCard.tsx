/** @format */

import { generateCarImage } from 'src/utils';

const CarCard = () => {
  const testCarData = {
    make: 'rolls-royce',
    model: 'phantom',
    color: 'blue',
  };

  return <img src={generateCarImage(testCarData, '1')} />;
};

export default CarCard;
