"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [typedChar, setTypedChar] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTypedChar((typedChar) => typedChar + 1);
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  const NavBar = () => {
    return(
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="text-xl font-bold">HSN Hacks</div>
        <ul className="flex gap-4">
          <li><a className="hover:text-gray-400" href="/">Home</a></li>
          <li><a className="hover:text-gray-400" href="/more-info">FAQ</a></li>
          <li><a className="hover:text-gray-400" href="/team">Our Team</a></li>
          <li><a className="hover:text-gray-400" href="/sponsorships">Sponsors</a></li>
        </ul>
      </nav>
    );
  };

  return (
    <div>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-auto">
        <div className="text-7xl font-mono z-10">
          <h1>
            {"HSN Hacks".substring(0, typedChar)}
            <span className="animate-pulse">|</span>
          </h1>
        </div>

        <div className="text-3xl flex flex-row font-mono z-10">
          <div className="flex-1 text-center">
            <p>When: TBD</p>
          </div>
          <div className="flex-1 text-center">
            <p>What: 24 hour in-person Highschooler hackathon</p>
          </div>
          <div className="flex-1 text-center">
            <p>Where: WW-P HSN</p>
          </div>
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-00 lg:grid-cols-4 lg:text-left">
          <a
            href="/more-info"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              More Info{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information from location to logistics
            </p>
          </a>

          <a
            href="https://discord.gg/ZdkuxQhPUh"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Discord Server{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Join our Discord for new announcements and a direct line of
              communication
            </p>
          </a>

          <a
            href="/team"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Meet the Team{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Meet the team bringing this hackathon to life
            </p>
          </a>

          <a
            href="/sponsorships"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Sponsors{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              See the incredible organizations supporting our mission
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
