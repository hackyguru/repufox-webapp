import React from "react";
import DataArchieves from "../components/DataArchieves";

export default function dataroom() {
  return (
    <div className="bg w-full min-h-screen">
      <div
        className="w-full bg-gradient-to-r
from-red-500
via-yellow-500
to-green-500
background-animate h-1"
      ></div>
      <DataArchieves />
    </div>
  );
}
