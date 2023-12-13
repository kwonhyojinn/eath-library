import { createBrowserRouter } from "react-router-dom";
// import { ProtectRoute } from "./ProtectRoute";
import App from "../App";
import NotFound from "../pages/NotFound";
import Main from "../pages/Main";
// import RegisterProduct from "../pages/RegisterProduct";
import Login from "../pages/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,

    children: [
      { path: "/all", element: <Main /> },
      {
        path: "/admin/new",
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
      { path: "/login", element: <Login /> },
      //   { path: "/signup", element: <Signup /> },
    ],
  },
]);

export default routes;
