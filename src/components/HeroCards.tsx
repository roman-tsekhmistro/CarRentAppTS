/** @format */
import HeroCarCard from '@components/common/HeroCarCard';
import cardData from '@data/heroCarCard';

const HeroCards = () => {
  return (
    <ul className='h-full w-full max-h-90 flex gap-8 justify-center items-center mt-5.5'>
      {cardData.map(({ text, subtext, img, btnText, isLeftCard }, index) => (
        <HeroCarCard
          key={index}
          text={text}
          subtext={subtext}
          img={img}
          btnText={btnText}
          isLeftCard={isLeftCard}
        />
      ))}
    </ul>
  );
};

export default HeroCards;
