import React from "react";

export default function Home() {
  return (
    <div>
      <div className="w-full flex justify-end  pr-6 space-x-5">
        <div className="bg-gray-400">Reputation score : 37</div>
        <div className="bg-gray-400">$walletid</div>
      </div>
      <div className="flex justify-center mt-40">
        Search for an identity
        <input className="bg-gray-300 ml-5" />
      </div>
    </div>
  );
}
