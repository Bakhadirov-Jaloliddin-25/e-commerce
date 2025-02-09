import { IProduct } from "../../types";
import Stars from "../stars/Stars";
import CartBtn from "./CartBtn";
import LikeBtn from "./LikeBtn";
import SeeBtn from "./SeeBtn";
// import MyLoader from "./Skeleton";

const Products = ({ data, title }: { data: any; title: any }) => {
  const productItems = data?.products?.map((product: IProduct) => (
    <div key={product.id} className="w-[290px] h-[322px]">
      <div className="h-[250px] bg-[#F5F5F5] flex justify-center items-center relative group overflow-hidden rounded-sm">
        <img
          src={product.images[1] ? product.images[1] : product.images[0]}
          alt={product.title}
          className="object-contain w-full h-[200px]"
        />
        <div className="absolute top-2 flex flex-col gap-2 right-[-50px] group-hover:right-2 opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
          <LikeBtn product={product} />
          <SeeBtn product={product} />
        </div>
        <div className="absolute bottom-[-50px] group-hover:bottom-0 duration-300 ease-in-out">
          <CartBtn product={product} />
        </div>
      </div>

      <div className="flex flex-col pt-4">
        <h2 className="truncate font-poppins font-medium">{product.title}</h2>
        <div className="flex gap-2 font-poppins">
          <p className="text-[#DB4444] font-semibold">${product.price}</p>
          <Stars rating={product.rating} />
          <p className="font-medium">({product.stock})</p>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <h2 className="font-poppins-bold text-2xl mb-6 text-center text-gray-900 max-[620px]:text-xl">
        {title}
      </h2>
      <div className="container flex flex-wrap justify-start gap-[49.3px] my-7">
        {/* <MyLoader /> */}
        {productItems}
      </div>
    </>
  );
};

export default Products;
