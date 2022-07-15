import React from "react";

export default function Home() {
  return (

      <div className="text-center items-center mt-40">
        <h1 className="text-2xl">Search for an identity</h1>
        <div className="flex justify-center mt-6 ">
          <div className="bg-[#101010] flex justify-between w-1/3 ml-5 text-lg p-2 rounded-xl text-white">
            <input className="text-lg  p-2 w-3/4 bg-[#101010] rounded-xl" />
            <button className="bg-white w-1/5 rounded-xl text-black">
              Search
            </button>
          </div>
        </div>
      </div>
  );
}
