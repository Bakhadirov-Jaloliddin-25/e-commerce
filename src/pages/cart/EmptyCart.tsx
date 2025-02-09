import { NavLink } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";
import NotFoundBtn from "../notfound/NotFoundBtn";

const EmptyCart = () => {
  return (
    <div className="container flex flex-col items-center justify-center text-center py-[110px]">
      <PiShoppingCart className="text-gray-400 text-7xl mb-4" />
      <h2 className="text-2xl font-bold text-gray-700">Your Cart is Empty</h2>
      <p className="text-gray-500 mt-2">
        Looks like you haven't added anything to your cart yet.
      </p>
      <div className="mt-5">
        <NavLink to={"/"}>
          <NotFoundBtn title={"Start Shopping"} />
        </NavLink>
      </div>
    </div>
  );
};

export default EmptyCart;
