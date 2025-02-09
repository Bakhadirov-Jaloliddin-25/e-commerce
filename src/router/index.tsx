import { useRoutes } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../layout/Layout";
import NotFound from "../pages/notfound/Notfound";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import SignUp from "../pages/register/sign-up/SignUp";
import Cart from "../pages/cart/Cart";
import Wishlist from "../pages/wishlist/Wishlist";
import SignIn from "../pages/register/sign-in/SignIn";
import { SuspenseContainer } from "../config";
import Detail from "../pages/detail/Detail";

const Routers = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: "/",
              element: (
                <SuspenseContainer>
                  <Home />
                </SuspenseContainer>
              ),
            },
            {
              path: "/contact",
              element: (
                <SuspenseContainer>
                  <Contact />
                </SuspenseContainer>
              ),
            },
            {
              path: "/about",
              element: (
                <SuspenseContainer>
                  <About />
                </SuspenseContainer>
              ),
            },
            {
              path: "/sign-up",
              element: (
                <SuspenseContainer>
                  <SignUp />
                </SuspenseContainer>
              ),
            },
            {
              path: "/sign-in",
              element: (
                <SuspenseContainer>
                  <SignIn />
                </SuspenseContainer>
              ),
            },
            {
              path: "/cart",
              element: (
                <SuspenseContainer>
                  <Cart />
                </SuspenseContainer>
              ),
            },
            {
              path: "/wishlist",
              element: (
                <SuspenseContainer>
                  <Wishlist />
                </SuspenseContainer>
              ),
            },
            {
              path: "/product/:id",
              element: (
                <SuspenseContainer>
                  <Detail />
                </SuspenseContainer>
              ),
            },
          ],
        },
        {
          path: "*",
          element: (
            <SuspenseContainer>
              <NotFound />
            </SuspenseContainer>
          ),
        },
      ])}
    </>
  );
};

export default Routers;
