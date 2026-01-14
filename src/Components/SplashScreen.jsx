import React, { useEffect } from "react";
import "../style/Splash.css";

export default function SplashScreen({ onFinish }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="sarthak-splash-container">
      <h1 className="sarthak-logo-text">
        <span className="text-warning">sarthak</span>
        <span className="text-white">-Portfolio</span>
        <span className="text-warning sarthak-dots"></span>
      </h1>
    </div>
  );
}
    