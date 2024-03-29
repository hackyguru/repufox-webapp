import React from "react";

export default function Settings() {
  return (
    <div className="mt-2">
      <div className="flex justify-between mt-8 space-x-5 mr-10">
        <div className="w-2/3 bg-[#101010] rounded-xl h-3/4 p-5">aaa</div>
        <div className="w-1/3 bg-[#101010] rounded-xl h-3/4">
          <div className="flex space-x-5">
            <h1 className="text-2xl p-5">Recent transactions</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 m-6 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex-col justify-between space-y-5 p-5">
            <div className="flex justify-between space-x-5 bg-[#050505] p-3 text-white opacity-40 rounded-xl">
              <span>$TxId</span>
              <span>$Date</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
