import React, { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const {handleRegister,manageProfile} = useContext(authContext)
    const [error,setError] = useState("")
    const handleSubmit=(e) =>{
        e.preventDefault()
        setError("")
        const name = e.target.name.value
        const image = e.target.image.value
        const email = e.target.email.value
        const password = e.target.password.value
        const conPassword = e.target.conPassword.value
        if(password.length < 6){
            setError("Password must contain at least 6 characters")
            return
        }
        if(password !== conPassword){
            setError("Passwords didn't match")
            return;
        }
        if(!/[a-z]/.test(password)){
            setError("Password must contain at least one lowercase letter")
            return;
        }
        if(!/[A-Z]/.test(password)){
            setError("Password must contain at least one uppercase letter")
            return;
        }
        console.log(name,image,email,password,conPassword)

        handleRegister(email,password)
        .then(res =>{
            manageProfile(name,image)
        })
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          Name <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-error w-full max-w-xs"
            name="name"
            required
          />
        </div>
        <div>
          Image<input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-error w-full max-w-xs"
            name="image"
            required
          />
        </div>
        <div>
         Email <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-error w-full max-w-xs"
            name="email"
            required
          />
        </div>
        <div>
          Password <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-error w-full max-w-xs"
            name="password"
            required
          />
        </div>
        <div>
          Confirm Password<input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-error w-full max-w-xs"
            name="conPassword"
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Register;
