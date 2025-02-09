import { GoHeart, GoHome } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { NavLink, useLocation } from "react-router-dom";

const MobileLinks = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="relative w-full bg-white/90 backdrop-blur-xl flex justify-around py-1 border-t font-poppins">
      <NavLink to={"/"}>
        <div
          className={`w-[63px] flex flex-col justify-center items-center p-1 border-2 ${
            isActive("/") ? "border-gray-200 bg-gray-200" : "border-transparent"
          } rounded-lg`}
        >
          <GoHome className="text-xl" />
          <p className="text-sm">Home</p>
        </div>
      </NavLink>
      <NavLink to={"/wishlist"}>
        <div
          className={`w-[63px] flex flex-col justify-center items-center p-1 border-2 ${
            isActive("/wishlist")
              ? "border-gray-200 bg-gray-200"
              : "border-transparent"
          } rounded-lg`}
        >
          <GoHeart className="text-xl" />
          <p className="text-sm">Wishlist</p>
        </div>
      </NavLink>
      <NavLink to={"/cart"}>
        <div
          className={`w-[63px] flex flex-col justify-center items-center p-1 border-2 ${
            isActive("/cart")
              ? "border-gray-200 bg-gray-200"
              : "border-transparent"
          } rounded-lg`}
        >
          <IoCartOutline className="text-xl" />
          <p className="text-sm">Cart</p>
        </div>
      </NavLink>
      <NavLink to={"/profile"}>
        <div
          className={`w-[63px] flex flex-col justify-center items-center p-1 border-2 ${
            isActive("/profile")
              ? "border-gray-200 bg-gray-200"
              : "border-transparent"
          } rounded-lg`}
        >
          <LuUser className="text-xl" />
          <p className="text-sm">Profile</p>
        </div>
      </NavLink>
    </div>
  );
};

export default MobileLinks;
