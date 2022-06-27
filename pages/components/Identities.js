import React from "react";

export default function Identities() {
  return (
    <div>
      <div>
        <h1>Link your identities</h1>
        <div className="mt-10 space-y-5">
          <div className="flex justify-between bg-gray-200">
            <h1>Twitter</h1>
            <p>https://twitter.com/username</p>
            <button className="mr-5">Unlink</button>
          </div>
          <div className="flex justify-between bg-gray-200">
            <h1>GitHub</h1>
            <p>https://twitter.com/username</p>
            <button className="mr-5">Unlink</button>
          </div>
          <div className="flex justify-between bg-gray-200">
            <h1>StackOverflow</h1>
            <p>https://twitter.com/username</p>
            <button className="mr-5">Unlink</button>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1>Link your domains</h1>
        <div className="mt-10 space-y-5">
          <div className="flex justify-between bg-gray-200">
            <h1>abc.com</h1>
            <p>Reputation : 50%</p>
            <p>Total vote count : 30</p>
            <button>Ask for review</button>
            <button className="mr-5">Unlink</button>
          </div>
        </div>
      </div>
    </div>
  );
}
