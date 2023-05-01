import React, { useContext } from "react";
import { FaGithubSquare, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const {googleSingIn, githubSingIn} = useContext(AuthContext);

    const googleLogin = () =>{
        googleSingIn()
        .then(result =>{
            const loogedUser = result.user;
            console.log(loogedUser);
        })
        .catch(error =>{
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    }
    const githubLogin = () =>{
        githubSingIn()
        .then(result =>{
            const gitUser = result.user;
            console.log(gitUser);
        })
        .catch(error =>{
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    }

  return (
    <div className="w-3/4 md:w-1/4 mx-auto my-14">
      <form>
        <h1 className="text-center font-bold text-3xl my-4">Please Login</h1>
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <div className="my-5">
        <button onClick={googleLogin} className="flex font-bold items-center justify-center gap-4 border rounded-md w-full mx-auto py-2 text-center"> <FaGoogle></FaGoogle> Login With Google</button>
        <button onClick={githubLogin} className="flex font-bold items-center justify-center gap-4 border rounded-md w-full mx-auto py-2 text-center mt-4"> <FaGithubSquare></FaGithubSquare> Login With Github</button>
        
      </div>
    </div>
  );
};

export default Login;
