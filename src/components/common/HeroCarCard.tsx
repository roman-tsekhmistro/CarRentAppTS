/** @format */

type HeroCarCardProps = {
  text: string;
  subtext: string;
  img: string;
};

const HeroCarCard = ({ text, subtext, img }: HeroCarCardProps) => {
  return (
    <li>
      <h2>{text}</h2>
      <h4>{subtext}</h4>
      <img src={img} alt='' />
    </li>
  );
};

export default HeroCarCard;
