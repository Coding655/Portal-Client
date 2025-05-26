import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //password validation

    //Auth related APIs

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">{/*  */}</div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-xl font-serif text-center p-2 text-blue-300">
            Create Your Account
          </h1>
          <span className="text-center font-thin">Register Now!!</span>
          <div className="card-body">
            <form onSubmit={handleRegister} className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Your Name" />
              {/* country */}
              <label className="label">Country</label>
              <select
                defaultValue="Pick Your Country"
                name="country"
                className="select"
              >
                <option selected disabled={true}>
                  Pick Your Country
                </option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="india">India</option>
                <option value="pakistan">Pakistan</option>
              </select>
              {/* number */}
              <label className="label">Number</label>
              <input
                type="number"
                className="input"
                placeholder="Phone Number"
              />
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
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
