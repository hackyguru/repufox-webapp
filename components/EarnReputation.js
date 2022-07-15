import React from "react";

export default function EarnReputation() {
  return (
    <div className="mt-2">
      <div className="mt-5 p-5">
        <div className="flex justify-between">
          <input
            className="bg-[#101010] rounded-xl w-1/3 pl-4 text-white shadow-2xl"
            placeholder="Search for tasks"
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
                <option value="name-asc"> High reputation </option>
                <option value="name-desc"> Low reputation </option>
                <option value="date-asc"> Latest </option>
                <option value="name-desc"> Oldest </option>
              </select>
            </label>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-4 mt-10">
          <div className="bg-[#101010] rounded-xl h-40">01</div>
          <div className="bg-[#101010] rounded-xl h-40">01</div>
          <div className="bg-[#101010] rounded-xl h-40">01</div>
          <div className="bg-[#101010] rounded-xl h-40">01</div>
          <div className="bg-[#101010] rounded-xl h-40">01</div>
          <div className="bg-[#101010] rounded-xl h-40">01</div>
          <div className="bg-[#101010] rounded-xl h-40">01</div>
          <div className="bg-[#101010] rounded-xl h-40">01</div>
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
