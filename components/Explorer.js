import React from "react";
import { useState } from "react";
import axios from "../utils/axios";

export default function Explorer() {
  const [hash, setHash] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [data, setData] = useState({});

  async function search() {
    let resp = await axios.get("/voting/explorer/" + hash);

    setData(resp.data);

    setIsSearched(true);
  }

  return (
    <div>
      Explorer
      <br />
      Enter hash:{" "}
      <input defaultValue={hash} onChange={(e) => setHash(e.target.value)} />
      <br />
      <button onClick={() => search()}>Search</button>
      <br />
      {isSearched && (
        <div>{data?.hash ? JSON.stringify(data.payload.value) : "Invalid Hash"}</div>
      )}
    </div>
  );
}
