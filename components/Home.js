import React, { useState } from "react";
import Helper from "../utils/helpers";
import axios from "../utils/axios";

export default function Home() {
  const [isSearched, setIsSearched] = useState(false);
  const [site, setSite] = useState("");
  const [votes, setVotes] = useState(false);

  const [score, setScore] = useState(0);

  async function getWebsiteStats() {
    if (!Helper.isValidDomain(site)) {
      setIsSearched(false);
      return alert("Please enter a valid domain");
    }

    setIsSearched(true);
    let resp = await axios.get("/voting/site/" + site);

    setVotes(resp.data);
    setScore(resp.data.score);
  }

  async function setScoreForDomain() {
    if (!Helper.isValidDomain(site)) {
      setIsSearched(false);
      return alert("Please enter a valid domain");
    }

    let resp = await axios.post(`/voting/insert?site=${site}&score=${score}`);

    alert("Score set");
  }

  return (
    <div className="text-center items-center mt-40 text-white">
      <h1 className="text-2xl">Search for an identity</h1>
      <div className="flex justify-center mt-6 ">
        <div className="bg-[#101010] flex justify-between w-1/3 ml-5 text-lg p-2 rounded-xl text-white">
          <input
            className="text-lg  p-2 w-3/4 bg-[#101010] rounded-xl"
            onChange={(e) => setSite(e.target.value)}
          />
          <button
            className="bg-white w-1/5 rounded-xl text-black"
            onClick={() => {
              getWebsiteStats();
            }}
          >
            Search
          </button>
        </div>
      </div>

      {!isSearched ? (
        <div></div>
      ) : (
          <div>
            <div>Received {votes.score} score on this site</div>

            <h3 className="mt-12">Set score for the current site:</h3>

            <div className="flex justify-center mt-3">
              <div className="bg-[#101010] flex justify-between w-1/3 ml-5 text-lg p-2 rounded-xl text-white">
                <input
                    className="text-lg  p-2 w-3/4 bg-[#101010] rounded-xl"
                    onChange={(e) => setScore(e.target.value)}
                    type="number"
                    max={100}
                    min={0}
                    value={score}
                />
                <button
                    className="bg-white w-2/5 rounded-xl text-black"
                    onClick={() => {
                      setScoreForDomain();
                    }}
                >
                  Set Score
                </button>
              </div>
            </div>
          </div>
      )}


    </div>
  );
}
