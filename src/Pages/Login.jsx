import React, { useContext, useState } from "react";
import { FaGithubSquare, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Login = () => {
    const [err, setErr] = useState('');
    const {googleSingIn, githubSingIn, loginUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location.state?.from?.pathname || '/';

    const googleLogin = () =>{
        googleSingIn()
        .then(result =>{
            const loogedUser = result.user;
            navigate(from, { replace: true })
            
        })
        .catch(error =>{
            const errorMessage = error.message;
            setErr(error.message)
            
        })
    }
    const githubLogin = () =>{
        githubSingIn()
        .then(result =>{
            const gitUser = result.user;
            navigate(from, { replace: true })
            
        })
        .catch(error =>{
            const errorMessage = error.message;
            setErr(error.message)
            
        })
    }
    const hangleLogin =(e) =>{
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      
      setErr('');
      loginUser(email, password)
      .then(result =>{
        const loogedUser = result.user;
        form.reset();
        navigate(from, { replace: true })
        
      })
      .catch(error =>{
        
        setErr(error.message)
      })
    }

  return (
    <div className="w-3/4 md:w-1/4 mx-auto py-14">
      <form onSubmit={hangleLogin}>
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
          Login
        </button>
        <p className="font-bold mt-3">Don't have any Account ? Please ... <Link state={{from: location?.state}} to='/register' className="text-cyan-600 underline">Register</Link> </p>
      </form>
      <div className="my-5">
        <button onClick={googleLogin} className="flex font-bold items-center justify-center gap-4 border border-indigo-600 rounded-md w-full mx-auto py-2 text-center"> <FaGoogle></FaGoogle> Login With Google</button>
        <button onClick={githubLogin} className="flex font-bold items-center justify-center gap-4 border rounded-md w-full border-indigo-600 mx-auto py-2 text-center mt-4"> <FaGithubSquare></FaGithubSquare> Login With Github</button>
        
      </div>
      <div className="text-red-600 my-4 font-bold">{err}</div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Login;
