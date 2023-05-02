import React, { useContext } from "react";
// import { DataContext } from "../../Layouts/MainLayout";
import SingleChef from "./SingleChef";
import { AuthContext } from "../../Provider/AuthProvider";

const Chef = () => {
  const {data} = useContext(AuthContext);
  // const { chefName } = data;
  return (
    <div className="max-w-full mx-auto py-10 bg-orange-50">
      <div className="max-w-7xl mx-auto p-10">
        <h1 className="text-3xl font-bold text-center my-10">
          Meet Our Chef
        </h1>
        <p className=" font-semibold text-center my-10">
        "Meet Our Chef": A glimpse into the culinary genius behind the scenes. Discover the passion and creativity of our head chef and their delectable dishes that are sure to tantalize your taste buds.
        </p>
        <div className="grid md:grid-cols-3 sm: grid-cols-1 gap-4 text-center">
          {
            data.map(sData =><SingleChef key={sData.id} sinData={sData}></SingleChef>)
          }
          {/* <div className="border rounded-md bg-orange-100 ">
            <h1 className="text-black font-bold text-3xl p-4">Salads</h1>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Chef;
