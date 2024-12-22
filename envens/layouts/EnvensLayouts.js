"use client";
import { envensUtility } from "@/utility";
import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import Footer from "./Footer";
import Header from "./Header";
const EnvensLayouts = ({ header, children, footer, rootElements }) => {
  useEffect(() => {
    envensUtility.scrollAnimation();
    envensUtility.circleText();
    niceSelect();
  }, []);

  return (
    <Fragment>
      <div className="page-wrapper" style={rootElements}>
        <Header header={header} />
        {children}
        <Footer footer={footer} />
      </div>
    </Fragment>
  );
};
export default EnvensLayouts;
