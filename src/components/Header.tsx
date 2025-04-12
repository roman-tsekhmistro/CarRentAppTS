/** @format */

import Search from '@components/common/Search';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='text-3xl text-primary-default-500 font-bold w-full  bg-primary-white px-[60px] py-10 flex gap-5'>
      <Link to='/'>MORENT</Link>
      <Search />
    </nav>
  );
};

export default Header;
