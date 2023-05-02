import React from "react";


const SingleRecipes = ({singleRecipi}) => {
    // console.log(singleRecipi);
    const {Picture,cookingMethod,ingredients,recipeName,rating} = singleRecipi;
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
            {
                ingredients.map((ing, i) => <li>{i+1}. {ing}</li>)
            }
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipes;
