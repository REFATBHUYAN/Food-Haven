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
      <div className="card card-compact h-3/4  w-full bg-base-100 shadow-md rounded-md">
        <figure className="h-96">
          <img className="h-96" src={Picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-start">{recipeName}</h2>
          <p className="text-start font-semibold">
            Cooking Method: {cookingMethod}
          </p>
          <p className="text-start font-semibold">Rating: {rating}</p>
          <p className="text-start font-semibold">Ingredients:</p>
          <ol className="text-start">
            {ingredients.map((ing, i) => (
              <li>
                {i + 1}. {ing}
              </li>
            ))}
          </ol>
          <Toaster position="top-center" reverseOrder={false} />
          <button
            onClick={btnDisable}
            disabled={favourit}
            className="btn flex mx-1 border items-center bg-orange-500  w-32 p-2 rounded-md"
          >
            Favourite <HiHeart className="w-10"></HiHeart>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipes;
