import React from "react";
import Banner from "../components/about/Banner";
import Layout from "../components/Layout";
import styled from "styled-components";
import Capabilities from "../components/about/Capabilities";
import Leaders from "../components/about/Leaders";
import Stats from "../components/about/Stats";
import Partners from "../components/about/Partners";
import News from "../components/about/News";

function about() {
  return (
    <BasedComponent>
      <Layout bgColor="transparent" textColor="#000000b8" logo="logo/logo-dark.png">
        <div className="container">
          <Banner />
          <Capabilities />
          <Leaders />
          <Stats />
          <Partners />
        </div>

        <News />
      </Layout>
    </BasedComponent>
  );
}

const BasedComponent = styled.div`
  /* background: linear-gradient(142.47deg, rgba(58, 229, 96, 0.31) 0.78%, rgba(217, 217, 217, 0) 60.89%); */
  background: linear-gradient(
    142.47deg,
    rgba(170, 242, 186, 0.97) 0.78%,
    rgb(255, 255, 255) 60.89%
  );
`;
export default about;


