import { MainLayout } from "@layouts";
import AboutUs from "@pages/AboutUs";
import Admin from "@pages/Admin";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Menu from "@pages/Menu";
import Profile from "@pages/Profile";
import Register from "@pages/Register";
import Services from "@pages/Services";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <>error</>,
    children: [
      {
        index: true,
        element:<Home />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/menu",
        element: <Menu/>,
      },
      {
        path: "/about",
        element: <AboutUs/>,
      },
      {
        path: "/services",
        element: <Services/>,
      },
      {
        path: "/profile",
        element: <Profile/>,
      },
      {
        path: "/admin",
        element: <Admin/>,
      },
      
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
