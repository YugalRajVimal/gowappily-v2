"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [gridData, setGridData] = useState([0]);

  useEffect(() => {
    // Generate random box counts per row on client
    const newGrid = Array.from({ length: 6 }).map(() => {
      return Math.floor(Math.random() * (8 - 4 + 1)) + 4; // 4 to 8
    });
    setGridData(newGrid);
  }, []);
  //   const [logs, setLogs] = useState([]);
  //   const [dots, setDots] = useState("");

  //   const logMessages = [
  //     "INCOMING HTTP REQUEST DETECTED ...",
  //     "SERVICE WAKING UP ...",
  //     "ALLOCATING COMPUTE RESOURCES ...",
  //     "PREPARING INSTANCE FOR INITIALIZATION ...",
  //     "STARTING THE INSTANCE ...",
  //     "ENVIRONMENT VARIABLES INJECTED ...",
  //     "FINALIZING STARTUP ...",
  //     "OPTIMIZING DEPLOYMENT ...",
  //     "STEADY HANDS. CLEAN LOGS. YOUR APP IS ALMOST LIVE ...",
  //   ];

  // Animate dots
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setDots((prev) => (prev.length < 3 ? prev + "." : ""));
  //     }, 400);
  //     return () => clearInterval(interval);
  //   }, []);

  // Show logs one by one
  //   useEffect(() => {
  //     let index = 0;
  //     const interval = setInterval(() => {
  //       if (index < logMessages.length) {
  //         const time = new Date().toLocaleTimeString("en-GB", { hour12: false });
  //         setLogs((prev) => [...prev, `${time} ${logMessages[index]}`]);
  //         index++;
  //       } else {
  //         clearInterval(interval);
  //       }
  //     }, 700);
  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div className="fixed top-0 left-0 z-50 h-screen w-screen bg-black text-green-400 font-mono text-sm flex flex-col items-start justify-start p-6 overflow-hidden">
      {/* <div>
        {logs.map((log, i) => (
          <p key={i} className="whitespace-pre">
            {log}
          </p>
        ))}
        <p className="animate-pulse">_</p>
      </div>
      <br /> */}

      <div className="whitespace-pre font-mono text-xs sm:text-sm overflow-x-auto text-left scale-[0.3] -translate-x-[35%] md:-translate-x-[10%] md:scale-[0.8]">
        {String.raw`
 ___       __       _______       ___           ________      ________      _____ ______       _______                               
|\  \     |\  \    |\  ___ \     |\  \         |\   ____\    |\   __  \    |\   _ \  _   \    |\  ___ \                              
\ \  \    \ \  \   \ \   __/|    \ \  \        \ \  \___|    \ \  \|\  \   \ \  \\\__\ \  \   \ \   __/|                             
 \ \  \  __\ \  \   \ \  \_|/__   \ \  \        \ \  \        \ \  \\\  \   \ \  \\|__| \  \   \ \  \_|/__                           
  \ \  \|\__\_\  \   \ \  \_|\ \   \ \  \____    \ \  \____    \ \  \\\  \   \ \  \    \ \  \   \ \  \_|\ \                          
   \ \____________\   \ \_______\   \ \_______\   \ \_______\   \ \_______\   \ \__\    \ \__\   \ \_______\                         
    \|____________|    \|_______|    \|_______|    \|_______|    \|_______|    \|__|     \|__|    \|_______|                         

`}
      </div>
      <div className="whitespace-pre font-mono text-xs sm:text-sm overflow-x-auto text-left scale-[0.3] -translate-x-[35%] -translate-y-[50%]  md:-translate-y-[0] md:scale-[0.8]">
        {String.raw`
                                                                                                        
 _________    ________          ________      ___      ___  ________      ________      ________      ________      _______      
|\___   ___\ |\   __  \        |\   ____\    |\  \    /  /||\   __  \    |\   ____\    |\   __  \    |\   __  \    |\  ___ \     
\|___ \  \_| \ \  \|\  \       \ \  \___|    \ \  \  /  / /\ \  \|\  \   \ \  \___|    \ \  \|\  \   \ \  \|\  \   \ \   __/|    
     \ \  \   \ \  \\\  \       \ \  \        \ \  \/  / /  \ \   __  \   \ \  \        \ \  \\\  \   \ \   _  _\   \ \  \_|/__  
      \ \  \   \ \  \\\  \       \ \  \____    \ \    / /    \ \  \ \  \   \ \  \____    \ \  \\\  \   \ \  \\  \|   \ \  \_|\ \ 
       \ \__\   \ \_______\       \ \_______\   \ \__/ /      \ \__\ \__\   \ \_______\   \ \_______\   \ \__\\ _\    \ \_______\
        \|__|    \|_______|        \|_______|    \|__|/        \|__|\|__|    \|_______|    \|_______|    \|__|\|__|    \|_______|
                                                                                                                                    
`}
      </div>

      {/* Faint grid on the right like Render */}
      {/* Random grid on the right */}
      <div className="absolute z-10 right-0 top-0 h-full w-1/3 flex flex-col opacity-10 rotate-[180deg]">
        {gridData.map((boxCount, rowIndex) => (
          <div key={rowIndex} className="flex flex-row justify-start">
            {Array.from({ length: boxCount }).map((_, colIndex) => (
              <div
                key={colIndex}
                className="border border-green-400 w-20 h-20 shrink-0"
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
