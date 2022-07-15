import { useEffect, useState } from "react";
import { useConnect, useNetwork, useSignMessage } from "wagmi";
import { useAccount } from "wagmi";
import Router from "next/router";
import { SiweMessage } from "siwe";
import axios from "../utils/axios";

export default function Home() {
  const [isInitializing, setIsInitializing] = useState(true);
  const [nonce, setNonce] = useState("");

  const {
    connectAsync,
    connectors,
    isLoading,
    pendingConnector,
  } = useConnect();

  const { address, isConnected } = useAccount();

  const { signMessageAsync } = useSignMessage();
  const { chain: activeChain } = useNetwork();

  useEffect(() => {
    (async () => {
      if (!isLoading && isInitializing && !isConnected) {
        setIsInitializing(false);
      } else if (!isLoading && isConnected && isInitializing && nonce === "") {
        let { data } = await axios.get("/me");

        if (data.address) {
          return await Router.push("/dashboard");
        }

        await fetchNonce();
      }
    })();
  }, [isLoading, isConnected]);

  const fetchNonce = async () => {
    const nonceRes = await fetch("/api/nonce");
    const nonce = await nonceRes.text();
    setNonce(nonce);
    setIsInitializing(false);
  };

  const signIn = async () => {
    try {
      const chainId = activeChain?.id;
      if (!address || !chainId) return;

      setIsInitializing(true);
      const message = new SiweMessage({
        domain: window.location.host,
        address,
        statement: "Sign in with Ethereum to the app.",
        uri: window.location.origin,
        version: "1",
        chainId,
        nonce: nonce,
      });
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      });

      const verifyRes = await fetch("/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, signature }),
      });
      if (!verifyRes.ok) {
        throw new Error("Error verifying message");
      }

      setIsInitializing(false);
      await Router.push("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  if (isInitializing) {
    return <div>Loading....</div>;
  }

  return (
    <div className="w-full h-screen bg backgrad">
      <div
        className="w-full bg-gradient-to-r
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
            {isConnected ? (
              <button
                className=" bg-white bg-opacity-40 hover:bg-opacity-100 px-3 rounded-md"
                onClick={() => {
                  signIn();
                }}
              >
                Sign In
              </button>
            ) : (
              <div>
                <button
                  className=" bg-white bg-opacity-40 hover:bg-opacity-100 px-3 rounded-md mr-2"
                  onClick={() =>
                    connectAsync({ connector: connectors[0] }).then((res) =>
                      fetchNonce()
                    )
                  }
                  disabled={!connectors[0].ready}
                >
                  Connect to Metamask
                  {!connectors[0].ready && " (unsupported)"}
                  {isLoading &&
                    connectors[0].id === pendingConnector?.id &&
                    " (connecting)"}
                </button>
                <button
                  className=" bg-white bg-opacity-40 hover:bg-opacity-100 px-3 rounded-md"
                  onClick={() =>
                    connectAsync({ connector: connectors[2] }).then((res) =>
                      fetchNonce()
                    )
                  }
                  disabled={!connectors[2].ready}
                >
                  Connect to WalletConnect
                  {!connectors[2].ready && " (unsupported)"}
                  {isLoading &&
                    connectors[2].id === pendingConnector?.id &&
                    " (connecting)"}
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="w-full h-full items-center flex justify-center ">
        <div className="flex justify-center ">
          <h1 className="">Reputation for everyone.</h1>
        </div>
      </div>
    </div>
  );
}
