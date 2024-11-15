import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
const Navbar = () => {
  const { user,handleLogout } = useContext(authContext);
  return (
    <div className="min-h-20 bg-blue-950 flex text-white justify-between items-center">
      <div>
        <h1 className="text-xl font-extrabold ml-4">TEETH WIZARD</h1>
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allTreatments" className="ml-4">
          All Treatments
        </NavLink>
        <NavLink to="/myAppoinments" className="ml-4">
          My appoinments
        </NavLink>
        <NavLink to="/profile" className="ml-4">
          Profile
        </NavLink>
      </div>
      <div>
        {user?.email ? (
          <div>
            <img src={user.photoURL} alt="" />
            <button onClick={handleLogout}>logout</button>
          </div>
        ) : (
          <NavLink to="/login">
            <button className="btn mr-4 btn-primary">Login</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
