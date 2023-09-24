import React, { useEffect } from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import "./styles/loader.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
const Loader = () => {
  return (
    <div className="loader-container">
      <div
        aria-label="Orange and tan hamster running in a metal wheel"
        role="img"
        className="wheel-and-hamster"
      >
        <div className="wheel"></div>
        <div className="hamster">
          <div className="hamster__body">
            <div className="hamster__head">
              <div className="hamster__ear"></div>
              <div className="hamster__eye"></div>
              <div className="hamster__nose"></div>
            </div>
            <div className="hamster__limb hamster__limb--fr"></div>
            <div className="hamster__limb hamster__limb--fl"></div>
            <div className="hamster__limb hamster__limb--br"></div>
            <div className="hamster__limb hamster__limb--bl"></div>
            <div className="hamster__tail"></div>
          </div>
        </div>
        <div className="spoke"></div>
      </div>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  // Enable and disable scrolling
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [isLoading]);
  // Simulating API loading
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12  md:px-12 md:py-16 lg:px-20 ">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="lg:flex lg:justify-between">
          <LeftSide isLoading={isLoading} />
          <RightSide />
        </div>
      )}
    </div>
  );
};

export default App;
