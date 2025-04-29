/** @format */
import SwapIcon from '../../assets/icons/swap.svg';

const SwapButton = () => {
  return (
    <button className='h-full w-full max-w-15 max-h-15 bg-primary-default-500 rounded-[10px] shadow-md flex items-center justify-center'>
      <img src={SwapIcon} alt='swap button' className='w-6 h-6' />
    </button>
  );
};

export default SwapButton;
