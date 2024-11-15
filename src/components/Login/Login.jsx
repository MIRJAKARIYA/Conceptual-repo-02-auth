import React, { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { handleGoogleLogin, handleLogin } = useContext(authContext);
  const [error,setError] = useState("")
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location)
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    handleLogin(email, password)
    .then(res=>{
      navigate(location.state.from)
    })
    .catch(err=>{
      setError(err.message)
    })
  };

  const googleLogingHandler = () =>{
    handleGoogleLogin()
    .then(res=>{
      navigate(location.state.from)
    })
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          Email{" "}
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-error w-full max-w-xs"
            name="email"
          />
        </div>
        <div>
          Password{" "}
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-error w-full max-w-xs"
            name="password"
          />
        </div>

        <button type="submit">Login</button>
      </form>
      {error && <p className="text-red-500">{error.split("/")[1].slice(0,18)}</p>}
      <button onClick={googleLogingHandler}>google login</button>
      {/* <button onClick={handleLogout}>logout</button> */}
    </div>
  );
};

export default Login;
