import React from "react";

export default function Home() {
  return (
    <div>
      <div className="mt-2">
        <div className="w-full flex justify-between  pr-6 space-x-5">
          <h1 className="">Home</h1>
          <div className="flex space-x-4">
            <div className="bg-[#101010] flex p-3 rounded-xl text-white h-full items-center">
              Reputation score : 37
            </div>
            <div className="bg-[#101010] p-3 rounded-xl text-white flex space-x-3  h-full items-center">
              <span>$walletid</span>
              <svg
                class="w-5 h-5 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
}