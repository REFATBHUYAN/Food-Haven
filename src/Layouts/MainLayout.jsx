import React, { createContext } from "react";
import NavBar from "../Shared/NavBar";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
export const DataContext = createContext(null);

const MainLayout = () => {
  const data = useLoaderData();
//   console.log(data);
  return (
    <DataContext.Provider value={data}>
      <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </DataContext.Provider>
  );
};

export default MainLayout;
