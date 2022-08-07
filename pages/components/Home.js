import React from "react";
import Wallet from "../../utils/wallet";
import Helper from "../../utils/helpers";
import axios from "../../utils/axios";
import { useState } from "react";

export default function Home() {
  const [isSearched, setIsSearched] = useState(false);
  const [site, setSite] = useState("");
  const [votes, setVotes] = useState(false);

  async function getWebsiteStats() {
    if (!Helper.isValidDomain(site)) {
      setIsSearched(false);
      return alert("Please enter a valid domain");
    }

    setIsSearched(true);
    let resp = await axios.get("/voting/site/" + site);

    setVotes(resp.data.data);
  }

  return (
    <div>
      <div className="w-full flex justify-end  pr-6 space-x-5">
        <div className="bg-gray-400">Reputation score : 37</div>
        <div className="bg-gray-400">{Wallet.getWallet()}</div>
      </div>
      <div className="flex justify-center mt-40">
        Search for an identity
        <input
          className="bg-gray-300 ml-5 rounded"
          type="text"
          onChange={(e) => setSite(e.target.value)}
        />
        <button
          className="bg-yellow-400 p-3 ml-3 rounded-xl"
          onClick={() => {
            getWebsiteStats();
          }}
        >
          Search
        </button>
      </div>

      {!isSearched ? (
        <div></div>
      ) : <div>Received {votes.score} for this website</div>}
    </div>
  );
}
