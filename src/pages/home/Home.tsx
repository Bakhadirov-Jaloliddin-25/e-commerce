import Hero from "../../components/hero/Hero";
import Loader from "../../components/loader/Loader";
import Products from "../../components/products/Products";
import { useGetProductsQuery } from "../../redux/api/products";

const Home = () => {
  const { data, isLoading } = useGetProductsQuery({});

  return (
    <div>
      {isLoading ? (
        <div className="h-[55vh] flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          <Hero />
          {data && <Products data={data} title="" />}
        </>
      )}
    </div>
  );
};

export default Home;
