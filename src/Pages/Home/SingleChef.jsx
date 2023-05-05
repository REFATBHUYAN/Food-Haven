import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const SingleChef = ({ sinData }) => {
  const {
    chefPicture,
    chefName,
    id,
    numberOfRecipes,
    ratings,
    yearsOfExperience,
  } = sinData;
  return (
    <div>
      <div className="card card-compact w-full h-96 bg-gradient-to-r from-indigo-300 to-indigo-200 shadow-md rounded-md border-b-indigo-600 border">
        {/* <figure>
          <img
            src={chefPicture}
            alt="Shoes"
          />
        </figure> */}
        <LazyLoad threshold={1}>
          <img
            className="w-full h-40 rounded-md"
            src={chefPicture}
            alt="Movie"
          />
        </LazyLoad>
        <div className="card-body">
          <h2 className="card-title text-start">{chefName}</h2>
          <p className="text-start font-semibold">
            Experience: {yearsOfExperience}
          </p>
          <p className="text-start font-semibold">Likes: {ratings}</p>
          <p className="text-start font-semibold">
            Number of Recipes: {numberOfRecipes}
          </p>
          <div className="card-actions justify-start">
            <Link to={`/chef/${id}`} className="btn btn-primary">
              View Recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleChef;
