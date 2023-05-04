import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout =() =>{
    logOut();
  }
  return (
    <div className="max-w-full mx-auto font-bold w-full bg-gradient-to-r from-indigo-100 to-indigo-300">
      <div className="navbar max-w-7xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to={`/`}
                  className={({ isActive, isPending }) =>
                    isActive ? "bg-indigo-400" : isPending ? "pending" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive, isPending }) =>
                    isActive ? "bg-indigo-400" : isPending ? "pending" : ""
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl font-bold">
          <span className="text-5xl text-indigo-500">F</span>ood<span className="text-indigo-500">Haven</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to={`/`}
                className={({ isActive, isPending }) =>
                  isActive ? "bg-indigo-400" : isPending ? "pending" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isActive ? "bg-indigo-400" : isPending ? "pending" : ""
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            {user ? (
              <li>
                <NavLink
                onClick={handleLogout}
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isActive ? "bg-indigo-400" : isPending ? "pending" : ""
                  }
                >
                  LogOut
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isActive ? "bg-indigo-400" : isPending ? "pending" : ""
                  }
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
          {
            user && <button title={user?.displayName} className="w-10 rounded-full ml-4">
            <img className="w-10 rounded-full mr-4" src={user?.photoURL} />
          </button>
          }
        </div>
      </div>
    </div>
  );
};

export default NavBar;
