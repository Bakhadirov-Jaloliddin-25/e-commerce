import { IProduct } from "../../types/index";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { addCart } from "../../redux/features/cart-slice";

const CartButton = ({ product }: { product: IProduct }) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state: RootState) => state.cart.value);

  return (
    <button
      onClick={() => dispatch(addCart(product))}
      className="w-[290px] h-[40px] bg-black text-white font-poppins font-medium"
    >
      {cartData?.some((cart) => cart.id === product.id)
        ? "Already In Cart"
        : "Add To Cart"}
    </button>
  );
};

export default React.memo(CartButton);
