import { createBrowserRouter } from "react-router";

import Home from "../page/Home";
import App from "../App";
import Products from "./Products";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <div>Product Details</div>},
      { path: "cart", element: <div>Cart</div> },
      { path: "*", element: <div>Not Found</div> }
    ],
  }
]);

export default router;
