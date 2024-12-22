"use client";
import { envensUtility } from "@/utility";
import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    envensUtility.preloader();
  }, []);
  return (
    <div className="preloader">
      <div className="preloader__image" />
    </div>
  );
};
export default Preloader;
