import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Navbar = () => {
  const { handleSubmit, register, reset } = useForm();
  const onValid = () => {};
  return (
    <React.Fragment>
      <nav>
        <div>
          <Link to="/"><h1>Movies Explorer</h1></Link>
        </div>

        <form onSubmit={handleSubmit(onValid)}>
          <input type="text" placeholder="Enter Movie Name..." />
          <button type="submit"></button>
        </form>

        <div>
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to=""></Link>
            </li>
            <li>
              <Link to="">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
