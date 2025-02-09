import { useNavigate } from "react-router-dom";
import sign_photo from "../../../assets/images/sign_photo.png";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="container flex mt-10 mb-20">
      <div>
        <img src={sign_photo} alt="sign_photo.png" />
      </div>
      <div className="flex justify-center items-center pl-32">
        <div className="w-[370px] flex flex-col justify-center items-center font-poppins">
          <form action="/">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl font-inter font-medium leading-[30px]">
                Sign up to Exclusive
              </h2>
              <p className="font-poppins font-normal">
                Enter your details below
              </p>
            </div>
            <div className="flex flex-col py-14 gap-10">
              <input
                className="outline-none border-b-2 pb-2"
                placeholder="Email or Phone Number"
                type="text"
              />
              <input
                className="outline-none border-b-2 pb-2"
                placeholder="Password"
                type="text"
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                className="bg-[#DB4444] border border-[#DB4444] text-[#FAFAFA] rounded-[4px] py-3 px-8 hover:bg-white hover:text-[#DB4444] duration-150"
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
