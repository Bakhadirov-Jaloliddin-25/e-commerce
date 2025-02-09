import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { toggleLike } from "../../redux/features/wishlist-slice";
import { memo, useState } from "react";

const Heart = ({ product }: { product: any }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.value); // Massiv maydonini chaqirish

  const initialState = {
    id: 0,
    state: product.is_liked ?? false,
    clicked: false,
  };

  const [currentLiked, setCurrentLiked] = useState<{
    id: number;
    state: boolean;
    clicked: boolean;
  }>(initialState);

  const handleLike = () => {
    setCurrentLiked({
      id: product.id,
      state: !currentLiked.state,
      clicked: true,
    });
    dispatch(toggleLike(product));
  };

  return (
    <button
      onClick={handleLike}
      className={`w-[40px] h-[40px] max-sm:h-[35px] max-sm:w-[35px] max-sm:text-lg rounded-full bg-white dark:bg-zinc-700 shadow-md flex items-center justify-center text-[22px] 
      transition-all duration-300 hover:bg-gray-200 dark:hover:bg-zinc-600`}
    >
      {wishlist?.some((item: any) => item.id === product.id) ? (
        <IoMdHeart className="text-black" />
      ) : (
        <IoMdHeartEmpty />
      )}
    </button>
  );
};

export default memo(Heart);
