import { NavLink, useNavigate } from "react-router-dom";
import { links } from "../../static";
import UpperHeader from "./UpperHeader";
import { GoHeart } from "react-icons/go";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import Menu from "./Menu";
// import SlidingMenu from "./SlidingMenu";
import MobileLinks from "./MobileLinks";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
// import { useCheckTokenQuery } from "../../redux/api/customer-api";
// import Switch from "../switcher/Switcher";

const Header = () => {
  const token = useSelector((state: RootState) => state.token.access_token);
  // const { data, isFetching, isSuccess } = useCheckTokenQuery(undefined, {
  //   skip: !token,
  // });

  const navigate = useNavigate();
  return (
    <>
      <UpperHeader />
      <div className="bg-white/90 backdrop-blur-xl border-b sticky top-0 left-0 z-50">
        <div className="container flex justify-between items-center py-4 max-[616px]:px-3 max-[430px]:py-2">
          <div
            className="font-inter text-3xl font-bold cursor-pointer hover:text-gray-600 duration-150 select-none max-[430px]:text-2xl"
            onClick={() => navigate("/")}
          >
            Exclusive
          </div>
          <div className="min-[728px]:hidden">
            <Menu />
          </div>
          <div className="flex gap-14 max-[727px]:hidden">
            {links?.map((link) => (
              <NavLink key={link.title} to={link.path}>
                <div className="py-3 text-[16px] font-medium hover:text-gray-500 duration-150">
                  {link.title}
                </div>
              </NavLink>
            ))}
          </div>
          <div className="flex justify-center items-center gap-3 max-[727px]:hidden">
            <div className="w-[300px] h-[50px] flex justify-around items-center rounded-[4px] bg-[#F5F5F5] max-[1023px]:hidden">
              <input
                placeholder="What are you looking for?"
                type="text"
                className="w-[210px] h-[38px] outline-none bg-[#F5F5F5] font-poppins"
              />
              <IoSearchOutline className="w-7 h-7" />
            </div>
            <GoHeart
              onClick={() => navigate("/wishlist")}
              className="w-7 h-7 cursor-pointer hover:text-gray-500 duration-150"
            />
            <IoCartOutline
              onClick={() => navigate("/cart")}
              className="w-7 h-7 cursor-pointer hover:text-gray-500 duration-150"
            />
            <LuUser
              onClick={() => navigate(token ? "/auth/profile" : "/sign-up")}
              className="w-7 h-7 cursor-pointer hover:text-gray-500 duration-150"
            />
            {/* <Switch /> */}
          </div>
        </div>
      </div>
      <div className="w-full fixed bottom-0 z-[150] min-[728px]:hidden">
        <MobileLinks />
      </div>
    </>
  );
};

export default Header;
