import React from "react";

const Services = () => {
  return (
    <div className="max-w-full text-black mx-auto py-10 bg-indigo-100">
      <div className="max-w-7xl mx-auto px-5">
        <h1 className="text-3xl font-bold text-center my-10">
          What people say about us
        </h1>
        <p className=" font-semibold text-black text-center my-10">
          {" "}
          Let us cater your next event with our customizable menus and
          professional service. Perfect for corporate events or family
          gatherings.
        </p>
        <div className=" max-w-6xl mx-auto my-4">
          <div className="w-1/2 mx-auto gap-3 md:flex justify-items-center items-center">
            <img className="rounded-full w-40" src="/refat.png" alt="" />
            <p className="w-full font-semibold text-black">
            Foodheven serves delectable dishes with a wide variety of flavors and textures. Their cozy ambiance and friendly staff create a wonderful dining experience. Highly recommended! <br/>
              -- Refat
            </p>
            
          </div>
        </div>
        <div className="grid md:grid-cols-4 sm: grid-cols-2 gap-4 text-center">
          <div className="border rounded-md bg-indigo-200 p-4">
            <h1 className="text-indigo-600 font-bold text-3xl">100%</h1>
            <h2 className="font-bold text-lg">Satisfaction Rate</h2>
          </div>
          <div className="border rounded-md bg-indigo-200 p-4">
            <h1 className="text-indigo-600 font-bold text-3xl">650+</h1>
            <h2 className="font-bold text-lg">Online Order Complete</h2>
          </div>
          <div className="border rounded-md bg-indigo-200 p-4">
            <h1 className="text-indigo-600 font-bold text-3xl">50+</h1>
            <h2 className="font-bold text-lg">Customer Daily</h2>
          </div>
          <div className="border rounded-md bg-indigo-200 p-4">
            <h1 className="text-indigo-600 font-bold text-3xl">5</h1>
            <h2 className="font-bold text-lg">Star Rating</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
