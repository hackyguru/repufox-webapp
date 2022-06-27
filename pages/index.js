import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex mt-5 mr-5 justify-end">
      <button className="bg-black p-3 text-white">Connect wallet</button>
    </div>
  );
}
