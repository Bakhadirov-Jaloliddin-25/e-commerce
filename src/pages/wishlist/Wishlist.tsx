import Products from "../../components/products/Products";
import { RootState } from "../../redux";
import { useSelector } from "react-redux";
import EmptyWishlist from "./EmptyWishlist";
import { useEffect } from "react";

const Wishlist = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.value);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const wishlistData = {
    products: wishlist,
    total: wishlist.length,
    skip: 0,
    limit: wishlist.length,
  };

  return (
    <>
      {wishlist.length > 0 ? (
        <Products data={wishlistData} title="Wishlist" />
      ) : (
        <EmptyWishlist />
      )}
    </>
  );
};

export default Wishlist;
