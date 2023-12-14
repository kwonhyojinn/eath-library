import { createBrowserRouter } from "react-router-dom";
// import { ProtectRoute } from "./ProtectRoute";
import App, { BaseLayout } from "../App";
import NotFound from "../pages/NotFound";
import Main from "../pages/Main";
// import RegisterProduct from "../pages/RegisterProduct";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

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
        // path: "/admin/new",
        // element: (
        //   <ProtectRoute checkAdmin>
        //     <RegisterProduct />
        //   </ProtectRoute>
        // ),
      },
      //   { path: "/cart", element: <MyCart /> },
      //   { path: "/products/detail/:id", element: <ProductDetail /> },
      //   { path: "/products/:category", element: <CategoryPage /> },
      //   { path: "/search", element: <Search /> },
    ],
  },
]);

export default routes;
