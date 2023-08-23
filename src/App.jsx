import React from "react";
import Left from "./components/LeftSide";
import RightSide from "./components/RightSide";
import "./styles/loader.css";

const Loader = () => {
  return (
    <div className="container">
      <div className="ld-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
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
          <Left />
          <RightSide />
        </div>
      )}
    </div>
  );
};

export default App;
