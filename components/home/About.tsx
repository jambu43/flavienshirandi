import React from "react";
import styled from "styled-components";
import LineDote from "./LineDote";

function About() {
  return (
    <div className="container" style={{ padding: "5rem 0" }}>
      <Content>
        <Title>Who We Coach</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus.
          <LineDote />
        </Description>
      </Content>
      <BrandContent>
        <Brand>Board of Directors</Brand>
        <LineDote style={{ margin: 0 }} />
        <Brand>Individual Directors</Brand>
      </BrandContent>
      <Text>
        Les entreprises sont le reflet de leur dirigeant : Les leaders statiques
        gouvernent des organisations stagnantes, les leaders agiles dirigent des
        organisations qui grandissent.
      </Text>
      <Text>
        Les grands leaders investissent toujours en eux-mêmes et en leurs
        collaborateurs.
      </Text>
    </div>
  );
}

const Content = styled.div`
  text-align: center;
`;
const Title = styled.h2`
  font-weight: 500;
  font-size: 45px;
  margin: 0 0 10px 0;
  color: #848484;
`;
const Description = styled.p`
  color: #848484;
  font-size: 10px;
  width: 25%;
  margin: auto;
`;
const BrandContent = styled.div`
  display: flex;
  width: 100%;
  margin-top: 5rem;
`;
const Brand = styled.h3`
  color: #009e6f;
  font-size: 55px;
  font-weight: normal;
  margin: 0;
  width: 100%;
`;
const Text = styled.p`
  font-size: 10px;
  width: 25%;
  color: #848484;
`;

export default About;
