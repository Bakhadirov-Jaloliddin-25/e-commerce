import { useNavigate } from "react-router-dom";
import { IProduct } from "../../types";
import { AiOutlineEye } from "react-icons/ai";

const SeeBtn = ({ product }: { product: IProduct }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`/product/${product.id}`)}
      className="w-[40px] h-[40px] max-sm:h-[35px] max-sm:w-[35px] max-sm:text-lg rounded-full bg-white place-items-center text-xl shadow-md hover:bg-gray-200 duration-500"
    >
      <AiOutlineEye />
    </button>
  );
};

export default SeeBtn;
