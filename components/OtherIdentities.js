import React from "react";

export default function OtherIdentities() {
  return (
    <div className="mt-2">
      <div className="mt-10">
        <p className="text-white opacity-40">
          You can optionally link other web2 identities to your wallet. This was
          <br />
          score and make your wallet discoverable in off-chain platforms.
        </p>
        <div className="flex-col space-x-4 mr-5 mt-10">
          <div className="bg-[#101010] w-full flex justify-between p-3 rounded-xl text-white">
            <span className="w-1/8">Twitter</span>
            <span className="text-white opacity-40 w-1/4">@hackyguru</span>

            <button className="flex space-x-2 items-center">
              <span>Unlink</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-col space-x-4 mr-5 mt-10">
          <div className="bg-[#101010] w-full flex justify-between p-3 rounded-xl text-white">
            <span className="w-1/8">GitHub</span>
            <span className="text-white opacity-40 w-1/4">@hackyguru</span>

            <button className="flex space-x-2 items-center">
              <span>Unlink</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-col space-x-4 mr-5 mt-10">
          <div className="bg-[#101010] w-full flex justify-between p-3 rounded-xl text-white">
            <span className="w-1/8">StackOverflow</span>
            <span className="text-white opacity-40 w-1/4">@hackyguru</span>

            <button className="flex space-x-2 items-center">
              <span>Link</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
