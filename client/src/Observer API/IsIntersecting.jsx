import React, { useRef,useEffect } from "react";
import useIntersectionObserver from "./index";
import Home from "../screen/Home/Home";

const MyComponent = () => {
  const ref = useRef();
  const isIntersecting = useIntersectionObserver(ref);

  // Load data when the component is visible
  useEffect(() => {
    if (isIntersecting) {
      // Load your data here
      // Example: dispatch an action to fetch data
    }
  }, [isIntersecting]);

  return <div ref={ref}><Home/> </div>;
};

export default MyComponent;
