import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../Context/AuthContext/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser().then(() => {
      console.log("sign out successful");
    });
  };
  const navLinks = (
    <>
      <Link to="/">
        <button className="focus:ring-2 hover:text-blue-600 focus:text-blue-600 rounded-full p-2 relative hover:top-[-2px]">
          Home
        </button>
      </Link>
      <Link to="/myApplication">
        <button className="focus:ring-2 hover:text-blue-600 focus:text-blue-600 rounded-full p-2 relative hover:top-[-2px]">
          MyApplications
        </button>
      </Link>
      <Link to="/addJob">
        <button className="focus:ring-2 hover:text-blue-600 focus:text-blue-600 rounded-full p-2 relative hover:top-[-2px]">
          Add Job
        </button>
      </Link>
      <Link to="/blog">
        <button className="focus:ring-2 hover:text-blue-600 focus:text-blue-600 rounded-full p-2 relative hover:top-[-2px]">
          Blog
        </button>
      </Link>
      <Link to="/contact">
        <button className="focus:ring-2 hover:text-blue-600 focus:text-blue-600 rounded-full p-2 relative hover:top-[-2px]">
          Contact
        </button>
      </Link>
    </>
  );
  return (
    <div className="navbar bg-base-100 font-serif">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center">
          <img
            className="w-12"
            src="/src/assets/icons8-job-application-100.png"
            alt=""
          />
          <Link to="/">
            <h1 className="text-xl">JOB PORTAL</h1>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-lg gap-20">{navLinks}</ul>
      </div>
      <div className="navbar-end ">
        {user ? (
          <>
            <button
              onClick={handleSignOut}
              className="btn btn-primary relative hover:top-[-2px]"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <h1 className="link mr-4 hover:text-blue-500 relative hover:top-[-2px]">
              <Link to="/register">Register</Link>
            </h1>
            <button className="btn btn-primary focus:ring-4 rounded-xl relative hover:top-[-2px]">
              <Link to="/signin">SignIn</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
