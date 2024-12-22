"use client";
import { envensUtility } from "@/utility";
import { useEffect } from "react";

const ScrollTop = () => {
  useEffect(() => {
    envensUtility.scrollTop();
  }, []);

  return (
    <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
      <i className="fas fa-arrow-up" />
    </a>
  );
};
export default ScrollTop;
