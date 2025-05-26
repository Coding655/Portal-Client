import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import GoogleSignIn from "../Google/GoogleSignIn";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log("signIn successfully", result.user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">{/*  */}</div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-xl font-serif text-center p-2 text-blue-300">
            Sign in your account
          </h1>
          <span className="text-center font-thin">SIgn in Now!!</span>
          <div className="card-body">
            <form onSubmit={handleSignIn} className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Your Email"
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Your Password"
              />
              <div className="mt-2">
                <a className="link link-hover">Forgot Password?</a>
              </div>
              <button className="btn btn-neutral mt-4">SIgn In</button>
            </form>
            <div className="divider">or</div>
            <div className=" flex flex-wrap gap-2">
              <GoogleSignIn></GoogleSignIn>
              <button className="btn">Facebook</button>
              <button className="btn">Linkedin</button>
              <button className="btn">Github</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
