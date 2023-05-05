import React from "react";

const Banner = () => {
  return (
    <div className="max-w-full text-black mx-auto w-full bg-gradient-to-r from-indigo-100 to-indigo-300">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mx-auto py-12 items-center max-w-7xl px-5 ">
        <div className="w-full pl-4">
          {/* className="md:flex mx-5 mt-8 w-full" */}
          <h1 className="font-bold text-3xl md:text-6xl">
          <span className="text-indigo-700">Food Haven :</span> Discover the Magic of <span className="text-indigo-700">American</span> Food in <br />{" "}
            
            
          </h1>
          <p className="w-full my-5 text-black">
            Welcome to Food Haven, where every bite tells a story. Our dishes
            are expertly crafted using the finest ingredients and inspired by
            cultures from around the world. Come and discover the magic.
          </p>
        </div>
        <div className="w-full mt-4">
          <img
            className="border-2 border-indigo-400 rounded-md w-full mx-auto"
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="banner photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
