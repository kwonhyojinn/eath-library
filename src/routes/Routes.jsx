import { createBrowserRouter } from "react-router-dom";
import ProtectRoute from "./ProtectRoute";
import App, { BaseLayout } from "../App";
import NotFound from "../pages/NotFound";
import Main from "../pages/Main";
import RegisterProduct from "../pages/admin/RegisterProduct";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Products from "../pages/Products";
import CategoryPage from "../pages/CategoryPage";
import ProductDetail from "../pages/ProductDetail";
import Search from "../pages/Search";
import Cart from "../pages/Cart";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <BaseLayout>
            <Main />
          </BaseLayout>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/products",
        element: (
          <BaseLayout>
            <Products />
          </BaseLayout>
        ),
      },
      {
        path: "/admin/new",
        element: (
          <BaseLayout>
            <ProtectRoute checkAdmin>
              <RegisterProduct />
            </ProtectRoute>
          </BaseLayout>
        ),
      },
      {
        path: "/products/:category",
        element: (
          <BaseLayout>
            <CategoryPage />
          </BaseLayout>
        ),
      },
      {
        path: "/products/:category/:id",
        element: (
          <BaseLayout>
            <ProductDetail />
          </BaseLayout>
        ),
      },
      {
        path: "/search",
        element: (
          <BaseLayout>
            <Search />
          </BaseLayout>
        ),
      },
      {
        path: "/cart",
        element: (
          <BaseLayout>
            <Cart />
          </BaseLayout>
        ),
      },
    ],
  },
]);


export default routes;
