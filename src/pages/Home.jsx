import React from "react";
import LeftSide from "../components/Home/leftSide";
import Rightside from "../components/Home/Rightside";
import Feature from "./Feature";
import HowWork from "../components/HowWork";

const Home = ({darkMode }) => {
  return (
   <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} transition-colors`}>
      <div className="w-full min-h-[35vw] mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <section className="w-full max-w-7xl flex flex-col md:flex-row justify-center md:justify-between gap-10 items-center mb-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <LeftSide darkMode={darkMode}/>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Rightside darkMode={darkMode} />
          </div>
        </section>
      </div>

      <section>
        <Feature darkMode={darkMode} />
      </section>

      <section className="max-w-7xl mx-auto">
        <HowWork darkMode={darkMode} />
      </section>
    </div>
  );
};

export default Home;
