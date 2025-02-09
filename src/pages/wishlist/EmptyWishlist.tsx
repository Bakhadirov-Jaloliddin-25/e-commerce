import { NavLink } from "react-router-dom";
import NotFoundBtn from "../notfound/NotFoundBtn";
import empty_wishlist from "../../assets/images/empty_wishlist.png";

const EmptyWishlist = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 sm:p-8 h-[500px] sm:h-[600px]">
      <img
        src={empty_wishlist}
        alt="Empty Wishlist"
        className="max-w-full h-auto sm:w-48 md:w-60 mb-6"
      />

      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2 sm:mb-4">
        Your Wishlist is Empty
      </h1>

      <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 max-w-[80%]">
        Explore our collection and add your favorite items to your wishlist!
      </p>

      <NavLink to={"/"}>
        <NotFoundBtn title={"See Products"} />
      </NavLink>
    </div>
  );
};

export default EmptyWishlist;
