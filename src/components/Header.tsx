/** @format */

import profile from '@assets/icons/profile.svg';
import Search from '@components/common/Search';
import { Link } from 'react-router-dom';
import HeaderRouterData from 'src/data/HeaderRouterData';

const Header = () => {
  return (
    <nav className='text-3xl text-primary-default-500 font-bold w-full  bg-primary-white px-[60px] py-10 flex gap-5 justify-around'>
      <div className='flex items-center gap-16'>
        <Link to='/'>MORENT</Link>
        <Search />
      </div>
      <ul className='flex gap-5 items-center justify-center'>
        {HeaderRouterData.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`flex flex-col items-center justify-center border-2 border-[#C3D4E9] p-2.5 rounded-full ${
              item.path == 'notification'
                ? 'after:h-[11px] after:w-[11px] after:bg-[#FF4423] after:rounded-full after:top-0 after:right-0 after:absolute'
                : ''
            } hover:bg-primary-default-500 hover:text-primary-white relative`}
          >
            <img src={item.icon} alt='icon' className='w-6 h-6' />
          </Link>
        ))}
        <Link to='profile'>
          <img src={profile} alt='link to profile page' />
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
