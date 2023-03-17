import React from "react";
import "./App.css";
import Baby from "./img/baby.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="max-w-md mx-auto  rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={Baby}
                alt="Baby"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Smart Baby
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Incredible Baby
              </a>
              <p className="mt-2 text-slate-500">
                This is a smart baby. This is a smart baby. This is a smart
                baby. This is a smart baby. This is a smart baby.
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
