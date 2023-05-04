import React from "react";

const Catagory = () => {
  return (
    <div className="max-w-full text-black mx-auto py-10 bg-indigo-100">
      <div className="max-w-7xl mx-auto p-5">
        <h1 className="text-3xl font-bold text-center my-10">
          Food Categories
        </h1>
        <p className=" font-semibold text-center my-10">
          Food categories include appetizers, entrees, desserts, beverages,
          salads, sandwiches, burgers, pizza, seafood, steaks and chops, pasta,
          soups, vegetarian, and gluten-free dishes. These categories offer a
          variety of options for different tastes and dietary needs, making them
          essential for any restaurant or food service business.
        </p>
        <div className="grid md:grid-cols-4 sm: grid-cols-2 gap-4 text-center">
          <div className="border rounded-md bg-indigo-400 ">
            <h1 className="text-black font-bold sm:text-2xl md:text-3xl p-4">Sandwiches</h1>
          </div>
          <div className="border rounded-md bg-indigo-400 ">
            <h1 className="text-black font-bold sm:text-2xl md:text-3xl p-4">Burgers</h1>
          </div>
          <div className="border rounded-md bg-indigo-400 ">
            <h1 className="text-black font-bold sm:text-2xl md:text-3xl p-4">Pizza</h1>
          </div>
          <div className="border rounded-md bg-indigo-400 ">
            <h1 className="text-black font-bold sm:text-2xl md:text-3xl p-4">Seafood</h1>
          </div>
          <div className="border rounded-md bg-indigo-400 ">
            <h1 className="text-black font-bold sm:text-2xl md:text-3xl p-4">Pasta</h1>
          </div>
          <div className="border rounded-md bg-indigo-400 ">
            <h1 className="text-black font-bold sm:text-2xl md:text-3xl p-4">Soups</h1>
          </div>
          <div className="border rounded-md bg-indigo-400 ">
            <h1 className="text-black font-bold sm:text-2xl md:text-3xl p-4">Vegetarian</h1>
          </div>
          <div className="border rounded-md bg-indigo-400 ">
            <h1 className="text-black font-bold sm:text-2xl md:text-3xl p-4">Salads</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagory;
