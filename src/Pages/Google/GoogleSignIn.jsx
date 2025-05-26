import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";

const GoogleSignIn = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn link-hover">
        Google
      </button>
    </div>
  );
};

export default GoogleSignIn;
