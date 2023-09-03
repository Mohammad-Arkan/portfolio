import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Root from "../pages/Root/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
    ],
  },
]);

export default router;
