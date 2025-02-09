import { RootState } from "../../redux";
import {
  decrementAmountCart,
  incrementAmountCart,
  deleteCart,
  startLoading,
  stopLoading,
} from "../../redux/features/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import { IoTrashOutline } from "react-icons/io5";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import Loader from "../../components/loader/Loader";
import CheckoutBtn from "./CheckoutBtn";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.token.access_token);
  const isLoading = useSelector((state: RootState) => state.cart.isLoading);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(startLoading());
    setTimeout(() => {
      dispatch(stopLoading());
    }, 1500);
  }, [dispatch]);

  const total = cart.reduce(
    (sum, product) =>
      sum + (Number(product.price) || 0) * (product.amount ?? 1),
    0
  );

  const handleCheckout = () => {
    token ? navigate("/checkout") : navigate("/auth/sign-in?q=checkout");
  };

  if (isLoading) {
    return (
      <div className="h-[55vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="container p-4 flex flex-col lg:flex-row items-start gap-6 bg-white text-black mb-72 font-poppins">
      <div className="w-full lg:w-2/3 overflow-x-auto">
        <table className="w-full table-auto text-left min-w-[600px]">
          <thead>
            <tr className="font-semibold text-base bg-zinc-950 text-white">
              <th className="px-4 py-3 text-center">Product</th>
              <th className="px-4 py-3 text-center">Price</th>
              <th className="px-4 py-3 text-center">Quantity</th>
              <th className="px-4 py-3 text-center">Subtotal</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => {
              const selectedAmount = product.amount ?? 1;
              return (
                <tr key={product.id} className="border-b">
                  <td className="px-3 py-4 flex items-center gap-3">
                    <img
                      src={product.images?.[0] || "default-image.jpg"}
                      alt={product.title}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <p className="font-semibold text-sm md:text-base">
                      {product.title}
                    </p>
                  </td>
                  <td className="px-3 py-4 text-center text-sm md:text-base">
                    ${Number(product.price).toFixed(2)}
                  </td>
                  <td className="px-3 py-4 text-center">
                    <div className="flex items-center gap-2">
                      <button
                        disabled={selectedAmount <= 1}
                        onClick={() =>
                          dispatch(decrementAmountCart(product.id))
                        }
                        className="w-[24px] flex justify-center items-center px-4 py-1 bg-zinc-900 text-white rounded-md text-sm md:text-base"
                      >
                        -
                      </button>
                      <span className="px-3 py-2 text-sm md:text-base">
                        {selectedAmount}
                      </span>
                      <button
                        disabled={selectedAmount >= product.stock}
                        onClick={() =>
                          dispatch(incrementAmountCart(product.id))
                        }
                        className="w-[24px] flex justify-center items-center px-4 py-1 bg-zinc-900 text-white rounded-md text-sm md:text-base"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-3 py-4 text-center text-sm md:text-base">
                    ${(Number(product.price) * selectedAmount).toFixed(2)}
                  </td>
                  <td className="px-3 py-4 text-center">
                    <button
                      onClick={() => dispatch(deleteCart(product.id))}
                      className="text-black p-2 rounded-md hover:bg-red-600 hover:text-white duration-300"
                    >
                      <IoTrashOutline size={18} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="w-full lg:w-1/3 bg-zinc-900 text-white p-4 rounded-md shadow-md">
        <h3 className="text-2xl font-bold mb-6 text-center">Cart Totals</h3>
        <div className="flex items-center gap-2 mb-4">
          <p className="text-lg font-bold">Price:</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <div className="flex justify-center" onClick={handleCheckout}>
          <CheckoutBtn />
        </div>
      </div>
    </div>
  );
};

export default Cart;
