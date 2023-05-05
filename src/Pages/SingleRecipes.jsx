import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { HiHeart } from "react-icons/hi";

const SingleRecipes = ({ singleRecipi }) => {
  const [favourit, setFavourit] = useState(false);
  // console.log(singleRecipi);
  const { Picture, cookingMethod, ingredients, recipeName, rating } =
    singleRecipi;

  const btnDisable = () => {
    setFavourit(true);
    toast.success("Successfully Added to Favorite ");
  };
  return (
    <div>
      <div className="card card-compact h-full text-black  w-full bg-gradient-to-r from-indigo-300 to-indigo-200 shadow-md rounded-md">
        <figure className="h-1/4">
          <img className="w-full h-full rounded-md" src={Picture} alt="Shoes" />
        </figure>
        <div className="card-body  h-3/4">
          <h2 className="card-title text-start">{recipeName}</h2>
          <p className=" font-semibold text-justify">
            Cooking Method: {cookingMethod}
          </p>
          <p className="text-start font-semibold">Rating: {rating}</p>
          {/* <p className="text-start font-semibold">Ingredients:</p> */}
          <ol className="text-start">
          <p className="text-start font-semibold">Ingredients:</p>
            {ingredients.map((ing, i) => (
              <li className="pl-5" key={i}>
                {i + 1}. {ing}
              </li>
            ))}
          </ol>
          <Toaster position="top-center" reverseOrder={false} />
          <button
            onClick={btnDisable}
            disabled={favourit}
            className="btn btn-primary flex mx-1 border items-center  w-40 p-2 rounded-md"
          >
            Favourite <HiHeart className="w-10"></HiHeart>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipes;
