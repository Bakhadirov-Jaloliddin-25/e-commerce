import qr from "../../assets/images/qr.svg";
import google_play from "../../assets/images/google_play.svg";
import app_store from "../../assets/images/app_store.svg";
import { GoPaperAirplane } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { BsCCircle } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { PiXLogoLight } from "react-icons/pi";
import { RiLinkedinLine } from "react-icons/ri";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-primary pt-16 flex flex-col gap-12 mt-24">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 font-poppins">
        <div className="text-white">
          <p className="text-2xl font-semibold font-inter mb-4">Exclusive</p>
          <p className="text-xl font-medium mb-4 leading-7">Subscribe</p>
          <p className="font-normal mb-4">Get 10% off your first order</p>
          <div className="flex border border-white bg-black rounded-[4px] py-3">
            <input
              placeholder="Enter your email"
              type="text"
              className="w-full max-w-[170px] outline-none bg-black pl-4 text-white"
            />
            <GoPaperAirplane
              className="text-2xl mr-3 cursor-pointer hover:text-gray-600 duration-150"
              onClick={() => navigate("/")}
            />
          </div>
        </div>

        <div className="text-white">
          <p className="text-xl font-medium mb-4 leading-7">Support</p>
          <p className="w-full max-w-[175px] font-normal leading-6 mb-4">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="mb-4 font-normal leading-6">exclusive@gmail.com</p>
          <p className="font-normal leading-6">+88015-88888-9999</p>
        </div>

        <div className="text-white">
          <p className="text-xl font-medium mb-4 leading-7">Account</p>
          <p className="mb-2">My Account</p>
          <p className="mb-2">Login / Register</p>
          <p className="mb-2">Cart</p>
          <p className="mb-2">Wishlist</p>
          <p className="mb-2">Shop</p>
        </div>

        <div className="text-white">
          <p className="text-xl font-medium mb-4 leading-7">Quick Link</p>
          <p className="mb-2">Privacy Policy</p>
          <p className="mb-2">Terms Of Use</p>
          <p className="mb-2">FAQ</p>
          <p className="mb-2">Contact</p>
        </div>

        <div className="text-white">
          <p className="text-xl font-medium mb-4 leading-7">Download App</p>
          <p className="font-medium text-xs mb-2">
            Save $3 with App New User Only
          </p>
          <div className="flex gap-2 mb-6">
            <img src={qr} alt="qr.svg" className="w-20 h-20" />
            <div className="flex flex-col">
              <img
                src={google_play}
                alt="google_play.svg"
                className="w-[110px] h-[40px] cursor-pointer"
              />
              <img
                src={app_store}
                alt="app_store.svg"
                className="w-[110px] h-[40px] cursor-pointer mt-2"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <FaFacebookF className="text-2xl cursor-pointer hover:text-gray-600 duration-150" />
            <PiXLogoLight className="text-2xl cursor-pointer hover:text-gray-600 duration-150" />
            <FaInstagram className="text-2xl cursor-pointer hover:text-gray-600 duration-150" />
            <RiLinkedinLine className="text-2xl cursor-pointer hover:text-gray-600 duration-150" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-1 border-t border-zinc-800 py-5 text-white">
        <BsCCircle className="text-zinc-700" />
        <p className="text-zinc-700">
          Copyright Bakhadirov 2025. All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
