import React, { createContext, useContext } from "react";
import NavBar from "../Shared/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import { AuthContext } from "../Provider/AuthProvider";
export const DataContext = createContext(null);

const MainLayout = () => {
  const {data, dataLoading} = useContext(AuthContext);
  if(dataLoading){
    return <div className="w-full relative mx-auto my-20"><progress className="progress w-1/5 mx-auto absolute inset-x-0 top-0 h-10"></progress></div>
  }
//   console.log(data);
  return (
    <DataContext.Provider value={data}>
      <div>
        <NavBar></NavBar>
        <div className="bg-indigo-100">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </DataContext.Provider>
  );
};

export default MainLayout;
