import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
// import { DataContext } from "../Layouts/MainLayout";
import SingleRecipes from "./SingleRecipes";
import { ScrollRestoration } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import LazyLoad from "react-lazy-load";

const Recipes = () => {
  // const [chef, setChef] = useState([]);

  const { id } = useParams();
  // console.log(id);
  // const data = useContext(DataContext);
  const { data } = useContext(AuthContext);
  const singleData = data.find((d) => d.id == id);
  //   setChef(singleData);
  const {
    chefName,
    recipi,
    chefPicture,
    ratings,
    bio,
    yearsOfExperience,
    numberOfRecipes,
  } = singleData;
  // console.log(singleData);
  return (
    <div className="bg-orange-50 max-w-full mx-auto">
      <div className="grid md:grid-cols-2 sm: grid-cols-1 gap-4 text-center max-w-7xl mx-auto p-5">
        {/* <figure className="w-full">
          <img className="w-full rounded-md" src={chefPicture} alt="Movie" />
        </figure> */}
        <div className="w-full">
          <LazyLoad height={500}>
            <img className="w-full h-full rounded-md" src={chefPicture} alt="Movie" />
          </LazyLoad>
        </div>
        <div className="card-body">
          <h2 className="card-title">{chefName}</h2>
          <p className="text-start">{bio}</p>
          <p className="text-start font-semibold">
            Experience: {yearsOfExperience}
          </p>
          <p className="text-start font-semibold">Likes: {ratings}</p>
          <p className="text-start font-semibold">
            Number of Recipes: {numberOfRecipes}
          </p>
        </div>
      </div>
      <h1 className="font-bold text-3xl text-center my-5">Top Recipes</h1>
      <div className="grid md:grid-cols-3 sm: grid-cols-1 gap-4 text-center max-w-7xl mx-auto p-10">
        {recipi.map((r) => (
          <SingleRecipes key={r.id} singleRecipi={r}></SingleRecipes>
        ))}
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default Recipes;
