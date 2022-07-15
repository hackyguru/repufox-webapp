import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="w-full h-screen bg backgrad">
      <div
        className="w-full     bg-gradient-to-r
    from-red-500
    via-yellow-500
    to-green-500
    background-animate h-1"
      ></div>
      <nav className="w-full p-5">
        <div className="flex w-full justify-between bg-[#101010]  p-5 rounded-xl">
          <img className="h-8" src="assets/logo.png" />
          <div className="flex justify-evenly space-x-5">
            <p className="text-white opacity-40 hover:opacity-100 text-md">
              Docs
            </p>
            <p className="text-white opacity-40 hover:opacity-100 text-md">
              About
            </p>
            <button className=" bg-white bg-opacity-40 hover:bg-opacity-100 px-3 rounded-md">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      <div className="w-full h-full flex justify-center items-center ">
        <h1 className=" ">Reputation for everyone.</h1>
      </div>
    </div>
  );
}
