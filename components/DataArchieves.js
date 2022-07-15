import React, { useState } from "react";

export default function DataArchieves() {
  return (
    <div className="mt-2">
      <div className="w-full flex justify-between  pr-6 space-x-5">
        <h1 className="">Data archieves</h1>
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
      <div className="mt-5 p-5">
        <div className="flex justify-between">
          <input
            className="bg-[#101010] rounded-xl w-1/3 pl-4 text-white shadow-2xl"
            placeholder="Search for topics"
          />
          <div class="inline-flex items-center  -space-x-px text-xs rounded-md">
            <label class="relative" for="sort">
              <span class="sr-only"> Sort </span>

              <select
                class="py-3 pl-5  text-xs bg-[#101010] font-medium text-white border-gray-200 rounded-xl hover:z-10 focus:outline-none hover:text-black focus:border-indigo-600 focus:z-10 hover:bg-gray-50 focus:ring-0"
                id="sort"
                name="sort"
              >
                <option className="pr-3"> Sort By </option>
                <option value="name-asc"> Date (ascending) </option>
                <option value="name-desc"> Date (decending) </option>
              </select>
            </label>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-4 mt-10">
          <div className="bg-[#101010]  p-5 rounded-xl h-40">
            <h1 className="text-sm mb-2">Date range</h1>
            <span className="opacity-40 text-sm text-white">
              No of nodes : XX
            </span>
          </div>
          <div className="bg-[#101010]  p-5 rounded-xl h-40">
            <h1 className="text-sm mb-2">Date range</h1>
            <span className="opacity-40 text-sm text-white">
              No of nodes : XX
            </span>
          </div>
          <div className="bg-[#101010]  p-5 rounded-xl h-40">
            <h1 className="text-sm mb-2">Date range</h1>
            <span className="opacity-40 text-sm text-white">
              No of nodes : XX
            </span>
          </div>
          <div className="bg-[#101010]  p-5 rounded-xl h-40">
            <h1 className="text-sm mb-2">Date range</h1>
            <span className="opacity-40 text-sm text-white">
              No of nodes : XX
            </span>
          </div>
          <div className="bg-[#101010]  p-5 rounded-xl h-40">
            <h1 className="text-sm mb-2">Date range</h1>
            <span className="opacity-40 text-sm text-white">
              No of nodes : XX
            </span>
          </div>
          <div className="bg-[#101010]  p-5 rounded-xl h-40">
            <h1 className="text-sm mb-2">Date range</h1>
            <span className="opacity-40 text-sm text-white">
              No of nodes : XX
            </span>
          </div>
        </div>
        <ol class="flex justify-center space-x-1 text-xs font-medium mt-10">
          <li>
            <a
              href="/?page=1"
              class="inline-flex items-center justify-center w-8 h-8 border text-white border-gray-100 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3 h-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="/?page=1"
              class="block w-8 h-8 leading-8 text-center border text-white border-gray-100 rounded"
            >
              {" "}
              1{" "}
            </a>
          </li>

          <li class="block w-8 h-8 leading-8 text-center text-black bg-white border-blue-600 rounded">
            2
          </li>

          <li>
            <a
              href="/?page=3"
              class="block w-8 h-8 leading-8 text-center border text-white border-gray-100 rounded"
            >
              {" "}
              3{" "}
            </a>
          </li>

          <li>
            <a
              href="/?page=4"
              class="block w-8 h-8 leading-8 text-center border text-white border-gray-100 rounded"
            >
              {" "}
              4{" "}
            </a>
          </li>

          <li>
            <a
              href="/?page=3"
              class="inline-flex items-center justify-center w-8 h-8 border text-white border-gray-100 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3 h-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
