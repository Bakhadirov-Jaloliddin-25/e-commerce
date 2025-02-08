import { useGetProductsQuery } from "../../redux/api/products";
import { IProduct } from "../../types";
import Stars from "../stars/Stars";
import CartBtn from "./CartBtn";
// import MyLoader from "./Skeleton";

const Products = () => {
  const { data } = useGetProductsQuery("");
  return (
    <div className="container flex flex-wrap justify-start gap-[49.3px] my-7">
      {/* <MyLoader /> */}
      {data?.products.map((product: IProduct) => (
        <div key={product.id} className="w-[290px] h-[322px]">
          <div className="h-[250px] bg-[#F5F5F5] flex justify-center items-center relative group overflow-hidden rounded-sm">
            <img
              src={product.images[1] ? product.images[1] : product.images[0]}
              alt={product.title}
              className="object-contain w-full h-[200px]"
            />
            <div className="absolute top-2 flex flex-col gap-2 right-[-50px] group-hover:right-2 opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
              <CartBtn product={product} />
            </div>
          </div>

          <div className="flex flex-col pt-4">
            <h2 className="truncate font-poppins font-medium">
              {product.title}
            </h2>
            <div className="flex gap-2 font-poppins">
              <p className="text-[#DB4444] font-medium">${product.price}</p>
              <Stars rating={product.rating} />
              <p className="font-medium">({product.stock})</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
