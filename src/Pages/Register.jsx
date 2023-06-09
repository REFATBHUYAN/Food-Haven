import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const Register = () => {
  const { createUser, updateUser, logOut } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const from = location.state?.from?.from?.pathname || "/";

  const resterUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    setErr("");
    if (password.length < 6) {
      setErr("Password should be at least 6 characters");
      return;
    }
    // console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        form.reset();
        userPhotoUpdate(createdUser, name, photo);
        logOut();
        toast.success('Register Successfully!--- please go to Login')
        navigate("/login");
      })
      .catch((error) => {
        setErr(error.message);
      });
  };
  const userPhotoUpdate = (user, name, photo) => {
    updateUser(user, name, photo)
      .then(() => {
        // console.log("user updated");
      })
      .catch((error) => setErr(error.message));
  };

  return (
    <div className="w-3/4 md:w-1/4 mx-auto py-14">
      <form onSubmit={resterUser}>
        <h1 className="text-center font-bold text-3xl my-4">Please Register</h1>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
            placeholder="Enter your Name Here"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="photo"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your PhotoURL
          </label>
          <input
            type="text"
            id="photo"
            name="photo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
            placeholder="Enter your Name Here"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
            placeholder="Enter your Email Here"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Register
        </button>
        <p className="font-bold mt-3">
          Already have an Account ? Please ...{" "}
          <Link to="/login" className="text-cyan-600 underline">
            Login
          </Link>{" "}
        </p>
      </form>
      <div className="text-red-600 my-4 font-bold">{err}</div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Register;
