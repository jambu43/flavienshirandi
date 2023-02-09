import React from "react";
import dynamic from "next/dynamic";
import Footer from "./Footer";

const Navbar = dynamic(
  () => import("./Navbar"),

)

export type Props = {
  bgColor : string;
  logo : string;
  textColor : string;
};

export const Layout: React.FC<Props> = ({ bgColor, logo, textColor, children }) => {

  return (
    <div>
      <Navbar bgColor={bgColor} logo={logo} textColor={textColor} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
