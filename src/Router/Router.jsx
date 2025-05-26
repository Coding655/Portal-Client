import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Mainlayout/Mainlayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SIgnIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivetRouter from "./PrivetRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: (
      <h2 className="text-red-500 absolute top-1/2 left-1/2 transition-all -translate-x-1/2 translate-y-1/2">
        This route is error
      </h2>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/info/:id",
        element: (
          <PrivetRouter>
            <JobDetails></JobDetails>
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/info/${params.id}`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;
