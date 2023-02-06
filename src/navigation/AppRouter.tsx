import { createBrowserRouter } from "react-router-dom";
import Wallet from "../pages/Wallet";
import ErrorPage from "../component/error-page";
import Send from "../pages/Send";
import Receive from "../pages/Receive";
import Trancsation from "../pages/transation";
import Remittance from "../pages/Remittance";
import Check from "../pages/Check";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Wallet />,
     errorElement: <ErrorPage />,
  },
  {
    path: "/trancsation/:id",
    element: <Trancsation />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/remittance",
    element: <Remittance />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/send",
    element: <Send />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/receive",
    element: <Receive />,
    errorElement: <ErrorPage />,
  },
]);
