import { useNavigate } from "react-router-dom";
import sign_photo from "../../../assets/images/sign_photo.png";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="container flex flex-col lg:flex-row mt-10 mb-20 gap-10 items-center">
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          src={sign_photo}
          alt="sign_photo.png"
          className="w-full max-w-md mx-auto lg:max-w-full"
        />
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center px-4 lg:pl-32">
        <div className="w-full max-w-sm flex flex-col justify-center items-center font-poppins">
          <form action="/">
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <h2 className="text-4xl font-inter font-medium leading-[30px]">
                Sign up to Exclusive
              </h2>
              <p className="font-poppins font-normal">
                Enter your details below
              </p>
            </div>
            <div className="flex flex-col py-10 lg:py-14 gap-6 lg:gap-10">
              <input
                className="outline-none border-b-2 pb-2 w-full"
                placeholder="Email or Phone Number"
                type="text"
              />
              <input
                className="outline-none border-b-2 pb-2 w-full"
                placeholder="Password"
                type="password"
              />
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
              <button
                className="bg-[#DB4444] border border-[#DB4444] text-[#FAFAFA] rounded-[4px] py-3 px-8 hover:bg-white hover:text-[#DB4444] duration-150 w-full lg:w-auto"
                type="submit"
              >
                Sign Up
              </button>
              <p
                onClick={() => navigate("/sign-in")}
                className="text-[#DB4444] cursor-pointer underline hover:text-red-800 duration-150"
              >
                Log In here
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
