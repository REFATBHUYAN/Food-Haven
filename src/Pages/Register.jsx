import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [err, setErr] = useState("");

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
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        form.reset();
        userPhotoUpdate(name,photo);
        // console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
      });

    
  };
  const userPhotoUpdate = (name,photo) =>{
    updateUser(name, photo)
      .then(() => {console.log('user updated')})
      .catch((error) => console.log(error));
  }

  return (
    <div className="w-3/4 md:w-1/4 mx-auto my-14">
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register
        </button>
        <p className="font-bold mt-3">
          Already have an Account ? Please ...{" "}
          <Link to="/login" className="text-blue-600 underline">
            Login
          </Link>{" "}
        </p>
      </form>
      <div className="text-red-600 my-4 font-bold">{err}</div>
    </div>
  );
};

export default Register;
