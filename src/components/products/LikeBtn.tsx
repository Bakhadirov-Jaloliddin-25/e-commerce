// import { memo, useState } from "react";
// import { IProduct } from "../../types";
// const Heart = ({ product }: { product: IProduct }) => {
//   const [currentLiked, setCurrentLiked] = useState<{
//     id: number;
//     state: boolean;
//     clicked: boolean;
//   }>;

//   const handleLike = () => {
//     setCurrentLiked({
//       id: product.id,
//       state: !currentLiked.state,
//       clicked: true,
//     });
//   };

//   return (
//     <button
//       onClick={handleLike}
//       className="w-[40px] h-[40px] max-sm:h-[35px] max-sm:w-[35px] max-sm:text-lg rounded-full bg-white dark:bg-zinc-700 shadow-md flex items-center justify-center text-[22px] 
//     transition-all duration-300 hover:bg-gray-200 dark:hover:bg-zinc-600"
//     >
//       {" "}
//       {wishlist?.some((item) => item.id === product.id) ? (
//         <IoMdHeart className="text-red-500" />
//       ) : (
//         <IoMdHeartEmpty />
//       )}
//     </button>
//   );
// };

// export default memo(Heart);
