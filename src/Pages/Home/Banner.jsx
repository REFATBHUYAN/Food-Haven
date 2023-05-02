import React from "react";

const Banner = () => {
  return (
    <div className="max-w-full mx-auto w-full bg-orange-100">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mx-auto py-12 items-center max-w-7xl">
        <div className="w-full pl-4">
          {/* className="md:flex mx-5 mt-8 w-full" */}
          <h1 className="font-bold text-3xl md:text-6xl">
            Discover the Magic of <br />{" "}
            <span className="text-orange-400">Food Haven</span>
            <br />: Where Every Bite Tells a Story
          </h1>
          <p className="w-full my-5">
            Welcome to Food Haven, where every bite tells a story. Our dishes
            are expertly crafted using the finest ingredients and inspired by
            cultures from around the world. Come and discover the magic.
          </p>
        </div>
        <div className="w-full mt-4">
          <img
            className="border-2 border-orange-400 rounded-md w-full mx-auto"
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="banner photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
