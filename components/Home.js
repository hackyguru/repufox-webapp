import React, { useState } from "react";
import Helper from "../utils/helpers";
import axios from "../utils/axios";

export default function Home() {
  const [isSearched, setIsSearched] = useState(false);
  const [site, setSite] = useState("");
  const [votes, setVotes] = useState(false);

  const [trust, setTrust] = useState(0);
  const [performance, setPerformance] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [decentralization, setDecentralization] = useState(0);
  const [logs, setLogs] = useState([]);

  async function getWebsiteStats() {
    if (!Helper.isValidDomain(site)) {
      setIsSearched(false);
      return alert("Please enter a valid domain");
    }

    let resp = await axios.get("/voting/site/" + site);

    setVotes(resp.data);
    setTrust(resp.data.trust);
    setPerformance(resp.data.performance);
    setReviews(resp.data.reviews);
    setDecentralization(resp.data.decentralization);
    setLogs(resp.data.logs);

    setIsSearched(true);
  }

  async function setScoreForDomain() {
    if (!Helper.isValidDomain(site)) {
      setIsSearched(false);
      return alert("Please enter a valid domain");
    }

    let resp = await axios.post(
      `/voting/insert?site=${site}&trust=${trust}&performance=${performance}&reviews=${reviews}&decentralization=${decentralization}`
    );

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
            Trust:
            <div className="bg-[#101010] row ml-5 text-lg p-2 rounded-xl text-white">
              <input
                className="text-lg  p-2 w-3/4 bg-[#101010] rounded-xl"
                onChange={(e) => setTrust(e.target.value)}
                type="number"
                max={25}
                min={0}
                value={trust}
              />
            </div>
            Performance:
            <div className="bg-[#101010] flex justify-between ml-5 text-lg p-2 rounded-xl text-white">
              <input
                className="text-lg  p-2 w-3/4 bg-[#101010] rounded-xl"
                onChange={(e) => setPerformance(e.target.value)}
                type="number"
                max={25}
                min={0}
                value={performance}
              />
            </div>
            Reviews:
            <div className="bg-[#101010] flex justify-between ml-5 text-lg p-2 rounded-xl text-white">
              <input
                className="text-lg  p-2 w-3/4 bg-[#101010] rounded-xl"
                onChange={(e) => setReviews(e.target.value)}
                type="number"
                max={25}
                min={0}
                value={reviews}
              />
            </div>
            Decentralization:
            <div className="bg-[#101010] flex justify-between ml-5 text-lg p-2 rounded-xl text-white">
              <input
                className="text-lg  p-2 w-3/4 bg-[#101010] rounded-xl"
                onChange={(e) => setDecentralization(e.target.value)}
                type="number"
                max={25}
                min={0}
                value={decentralization}
              />
            </div>
          </div>
          <button
            className="bg-white w-2/5 rounded-xl text-black mt-4"
            onClick={() => {
              setScoreForDomain();
            }}
          >
            Set Score
          </button>

          <h5 className="mt-5">Logs</h5>
          {logs.map((log, index) => (
            <p className="my-2 max-w-fit overflow-scroll" key={index}>{JSON.stringify(log)}</p>
          ))}
        </div>
      )}
    </div>
  );
}
