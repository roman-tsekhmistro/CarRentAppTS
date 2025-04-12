/** @format */

import Search from '@components/common/Search';
import { Link } from 'react-router-dom';
import HeaderRouterData from 'src/data/HeaderRouterData';

const Header = () => {
  return (
    <nav className='text-3xl text-primary-default-500 font-bold w-full  bg-primary-white px-[60px] py-10 flex gap-5'>
      <Link to='/'>MORENT</Link>
      <Search />
      {HeaderRouterData.map((item, index) => (
        <Link to={item.path} key={index}>
          <img src={item.icon} alt='icon' className='w-6 h-6' />
        </Link>
      ))}
    </nav>
  );
};

export default Header;
