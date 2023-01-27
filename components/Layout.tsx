import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
