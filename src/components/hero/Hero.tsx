import hero from "../../assets/images/hero.png";
import apple from "../../assets/images/apple.png";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  return (
    <div className="container bg-primary flex max-[1024px]:flex-col gap-10 lg:gap-20 my-10 px-6 lg:px-16 rounded-sm max-[604px]:flex-row max-[476px]:flex-col max-[476px]:gap-0">
      <div className="flex flex-col py-10 lg:py-16 gap-5">
        <div className="flex items-center gap-4">
          <img src={apple} alt="apple.png" className="w-8 h-8" />
          <p className="text-white font-normal font-poppins text-[16px]">
            iPhone 14 Series
          </p>
        </div>
        <div className="text-white text-3xl lg:text-5xl leading-[40px] lg:leading-[60px] font-semibold font- max-interw-[290px]">
          Up to 10% off Voucher
        </div>
        <div className="text-white text-[16px] font-medium flex gap-2 items-center cursor-pointer hover:brightness-75 duration-150">
          <p className="border-b-2 pb-1">Shop Now</p>
          <GoArrowRight className="text-xl lg:text-2xl" />
        </div>
      </div>
      <div className="max-[476px]:place-items-center">
        <img
          src={hero}
          alt="hero.png"
          className="w-full lg:w-auto mt-4 max-[1024px]:mt-0 max-[604px]:mt-4 max-[604px]:h-[300px] max-[604px]:w-[300px] object-contain max-[476px]:m-0"
        />
      </div>
    </div>
  );
};

export default Hero;
