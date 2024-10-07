import React, { useEffect } from "react";

const TestuseEffect_Tick = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Tick");
    }, 1000);

    return () => clearInterval(interval);
  }, []);
};

export default TestuseEffect_Tick;
