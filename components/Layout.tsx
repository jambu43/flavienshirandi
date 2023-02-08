import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

export type Props = {
  bgColor : string;
  logo : string;
  textColor : string;
};

export const Layout: React.FC<Props> = ({ bgColor, logo, textColor, children }) => {

  return (
    <div data-scroll-section>
      <Navbar bgColor={bgColor} logo={logo} textColor={textColor} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
