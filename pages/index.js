import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#101010]">
      <Navbar />
      <Hero />
    </div>
  );
}
