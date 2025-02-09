import Hero from "../../components/hero/Hero";
import Products from "../../components/products/Products";
import { useGetProductsQuery } from "../../redux/api/products";

const Home = () => {
  const { data } = useGetProductsQuery({});

  return (
    <>
      <Hero />
      {data && <Products data={data} title="" />}
    </>
  );
};

export default Home;
