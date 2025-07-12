import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./component/page/LoginPage.jsx";
import RegisterPage from "./component/page/RegisterPage.jsx";
import ErrorPage from "./component/page/ErrorPage.jsx";
import ProductPage from "./component/page/ProductPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
  },
  {
    path: "/product",
    element: <ProductPage></ProductPage>
  }
]);

{
  /* <LabelElement htmlFor="email" tag="Email"></LabelElement>
              <InputElement type="text" placeholder="example@gmail.com"></InputElement>
              <LabelElement htmlFor="password" tag="Password"></LabelElement>
              <InputElement type="text" placeholder="*****"></InputElement> */
}
{
  /* <div className="flex gap-x-3">
          <ButtonElement variant="red-700">Login</ButtonElement>
          <ButtonElement info="Register"></ButtonElement>
          <ButtonElement variant="slate-700" info="Logout"></ButtonElement>
        </div> */
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
