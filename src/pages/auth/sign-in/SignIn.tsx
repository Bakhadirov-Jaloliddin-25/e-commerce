import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveToken } from "../../../redux/features/token-slice";
import sign_photo from "../../../assets/images/sign_photo.png";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        setError("Invalid username or password");
        return;
      }

      const data = await response.json();
      dispatch(saveToken(data.accessToken));
      navigate("/auth/profile");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container flex flex-col lg:flex-row mt-10 mb-20 gap-10 items-center">
      <div className="w-full lg:w-1/2">
        <img
          src={sign_photo}
          alt="sign_photo"
          className="w-full max-w-md mx-auto lg:max-w-full"
        />
      </div>

      <div className="w-full lg:w-1/2 flex justify-center items-center px-4 lg:pl-32">
        <div className="w-full max-w-sm flex flex-col justify-center items-center font-poppins">
          <form onSubmit={handleSubmit}>
            <h2 className="text-4xl font-inter font-medium leading-[30px]">
              Log in to Exclusive
            </h2>
            <p className="font-poppins font-normal mt-4">
              Enter your details below
            </p>

            {error && <p className="text-red-500 mt-2">{error}</p>}

            <div className="flex flex-col py-10 lg:py-14 gap-6 lg:gap-10">
              <input
                className="outline-none border-b-2 pb-2 w-full"
                placeholder="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="outline-none border-b-2 pb-2 w-full"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-between items-center gap-4">
              <button
                className="bg-[#DB4444] border border-[#DB4444] text-[#FAFAFA] rounded-[4px] py-3 px-8 hover:bg-white hover:text-[#DB4444] duration-150 w-full lg:w-auto"
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
