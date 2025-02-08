import hero from "../../assets/images/hero.png";
import apple from "../../assets/images/apple.png";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  return (
    <div className="container bg-primary flex gap-20 my-10 px-16 rounded-sm">
      <div className="flex flex-col py-16 gap-5">
        <div className="flex items-center gap-4">
          <img src={apple} alt="apple.png" />
          <p className="text-white font-normal font-poppins text-[16px]">
            iPhone 14 Series
          </p>
        </div>
        <div className="w-[290px] text-white text-5xl leading-[60px] font-semibold font-inter">
          Up to 10% off Voucher
        </div>
        <div className="w-[110px] text-white text-[16px] font-medium flex gap-2 items-center cursor-pointer hover:brightness-75 duration-150">
          <p className="border-b-2 pb-1">Shop Now</p>
          <GoArrowRight className="text-2xl" />
        </div>
      </div>
      <img src={hero} alt="hero.png" className="mt-4" />
    </div>
  );
};

export default Hero;
