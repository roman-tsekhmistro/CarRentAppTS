/** @format */

type HeroCarCardProps = {
  text: string;
  subtext: string;
  img: string;
  btnText: string;
  isLeftCard: boolean | undefined;
};

const HeroCarCard = ({
  text,
  subtext,
  img,
  btnText,
  isLeftCard,
}: HeroCarCardProps) => {
  return (
    <li
      className={`flex flex-col items-start relative max-w-[640px] w-full h-full max-h-[360px] rounded-[10px] p-6 text-primary-white ${
        isLeftCard
          ? 'bg-[url(./assets/hero-cars/left-card.png)] bg-info-default-500'
          : 'bg-[url(./assets/hero-cars/right-card.png)] bg-primary-default-500'
      }`}
    >
      <h2 className='text-[32px] font-semibold  tracking-tight max-w-[272px]'>
        {text}
      </h2>
      <h4 className='max-w-[284px] text-base mt-4 mb-5'>{subtext}</h4>
      <button
        className={`${
          isLeftCard
            ? 'bg-primary-default-500 hover:bg-info-default-500'
            : 'bg-info-default-500 hover:bg-primary-default-500'
        } rounded-sm px-5 h-11 text-base font-semibold text-primary-white hover:border   transition-colors duration-300 ease-in-out`}
      >
        {btnText}
      </button>
      <img className='absolute bottom-[10px] right-25' src={img} alt={text} />
    </li>
  );
};

export default HeroCarCard;
