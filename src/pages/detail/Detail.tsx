import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineChangeCircle } from "react-icons/md";
import { useGetSingleProductQuery } from "../../redux/api/products";
import LikeBtn from "../../components/products/LikeBtn";
import Loader from "../../components/loader/Loader";
import {
  addCart,
  decrementAmountCart,
  incrementAmountCart,
} from "../../redux/features/cart-slice";
import { useDispatch } from "react-redux";
import Stars from "../../components/stars/Stars";
// import SkeletonDetail from "./SkeletonDetail";

const Detail = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetSingleProductQuery(Number(id));
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (product?.images) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading)
    return (
      <div className="h-[55vh] flex justify-center items-center">
        <Loader />
      </div>
    );

  if (!product) {
    return <div className="text-center py-10">Product not found.</div>;
  }

  const handleQuantityChange = (type: "increase" | "decrease") => {
    setQuantity((prevQuantity) => {
      if (type === "increase" && prevQuantity < product.stock) {
        return prevQuantity + 1;
      } else if (type === "decrease" && prevQuantity > 1) {
        return prevQuantity - 1;
      }
      return prevQuantity;
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 mt-10 grid md:grid-cols-2 gap-10 font-poppins">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex md:flex-col gap-2 overflow-y-auto max-h-[500px]">
          {product.images.map((img: any, index: any) => (
            <img
              key={index}
              src={img}
              alt={product.title}
              className={`w-40 h-40 object-contain rounded-lg cursor-pointer border border-gray-200 transition-all duration-300 ${
                mainImage === img ? "border-black" : ""
              }`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
        <div className="flex-1">
          <img
            src={mainImage}
            alt={product.title}
            className="w-full h-auto min-h-[500px] max-h-[500px] object-contain rounded-lg border"
          />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <div className="flex items-center mt-2 gap-2">
          <Stars rating={product.rating} />
          <span>|</span>
          <p className="text-emerald-500">In stock: {product.stock}</p>
        </div>
        <div>
          <span className="text-lg font-semibold text-black">
            ${product.price}
          </span>
        </div>
        <p className="text-gray-700 mt-4">{product.description}</p>
        <div className="mt-4">
          <h3 className="font-semibold">Size:</h3>
          <div className="flex gap-2 mt-2">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 border rounded-lg hover:bg-white hover:text-black hover:border-black transition-all duration-200 ${
                  selectedSize === size ? "bg-black text-white" : ""
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center gap-4">
          <div className="flex items-center border rounded-[4px] overflow-hidden">
            <button
              className="px-3 py-1 border-r hover:bg-black hover:text-white cursor-pointer duration-150"
              onClick={() => {
                handleQuantityChange("decrease"),
                  dispatch(decrementAmountCart(product.id));
              }}
              disabled={quantity === 1}
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              className="px-3 py-1 border-l hover:bg-black hover:text-white cursor-pointer duration-150"
              onClick={() => {
                handleQuantityChange("increase"),
                  dispatch(incrementAmountCart(product.id));
              }}
              disabled={quantity >= product.stock}
            >
              +
            </button>
          </div>
          <button
            onClick={() => {
              dispatch(addCart(product)), navigate("/cart");
            }}
            className="hover:bg-black hover:text-white px-6 py-2 rounded-[4px] border bg-white text-black border-black duration-150"
          >
            Buy Now
          </button>

          <LikeBtn product={product} />
        </div>
        <div className="mt-6 border border-gray-500 rounded">
          <div className="flex items-center gap-2 mb-2 p-4 border-b border-gray-500">
            <TbTruckDelivery className="text-xl" />
            <div>
              <h2 className="font-semibold">Free Delivery</h2>
              <p className="text-sm text-gray-600">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-4 pt-3">
            <MdOutlineChangeCircle className="text-xl" />
            <div>
              <h2 className="font-semibold">Return Delivery</h2>
              <p className="text-sm text-gray-600">
                Free 30 Days Delivery Returns. Details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
