import React from "react";
import styled from "styled-components";

function GetTouch() {
  return (
    <Container data-scroll-section>
      <Row className="container">
        <FirstRow>
          <Title>
            Ready to work, <TitleColor>let’s chat</TitleColor>
          </Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla,
          </Description>
        </FirstRow>
        <SecondeRow>
          <Action href="#">
            <Icon className="uil uil-arrow-right" />
          </Action>
        </SecondeRow>
      </Row>
      <GetTouchText>Get in Touch</GetTouchText>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
  padding: 5rem 0;
`;

const GetTouchText = styled.p`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 280px;
  display: flex;
  align-items: center;
  letter-spacing: -0.005em;
  color: rgba(56, 56, 56, 0.63);
  margin: 0;
  opacity: 0.11;
`;
const Row = styled.div`
  display: flex;
  position: absolute;
  right: 0;
`;
const FirstRow = styled.div``;
const SecondeRow = styled.div``;
const Title = styled.h3`
  font-family: "Public Sans";
  font-weight: 500;
  font-size: 50px;
  line-height: 87px;
  color: #000000;
`;
const TitleColor = styled.span`
  color: #009e6f;
  text-decoration-line: underline;
  font-style: italic;
`;
const Description = styled.p`
  font-family: "Questrial", sans-serif;
  font-weight: 100;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  color: #6c6a6a;
  width: 80%;
  line-height: 1.5;
`;
const Action = styled.a`
  position: relative;
  width: 250px;
  height: 250px;
  background-color: #009e6f;
  display: inline-block;
  border-radius: 100%;
  z-index: 5;
`;
const Icon = styled.i`
  font-size: 7rem;
  position: relative;
  left: 68px;
  bottom: -34px;
  color: #fff;
`;

export default GetTouch;
