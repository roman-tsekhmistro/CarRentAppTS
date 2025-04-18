/** @format */

import Footer from '@components/Footer';
import Header from '@components/Header';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <div className='bg-[#F6F7F9] h-screen w-full flex flex-col items-center'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PublicLayout;
