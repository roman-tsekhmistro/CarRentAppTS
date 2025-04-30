/** @format */
//const axios = require('axios');
import axios from 'axios';
export interface CarProps {
  city_mpg?: number;
  class?: string;
  combination_mpg?: number;
  cylinders?: number;
  displacement?: number;
  drive?: string;
  fuel_type?: string;
  highway_mpg?: number;
  make: string;
  model: string;
  transmission?: string;
  year?: number;
  angle?: number;
}

export const fetchCarsWithAxios = async () => {
  const options = {
    method: 'GET',
    url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    headers: {
      'x-rapidapi-key': '94a38d2974msh79b9256f47b2148p18cfeajsn4d37abc2eff2',
      'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};

export const generateCarImage = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');
  const { make, model, year } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
};
