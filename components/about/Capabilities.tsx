import React from "react";
import styled from "styled-components";
function Capabilities() {
  return (
    <Container data-scroll-section>
      <Header>
        <Bar />
        <Title>SHIRANDI’S CAPABILITIES</Title>
      </Header>
      <CardContainer>
        {data.map((data) => (
          <Card>
            <CardTitle>{data.title}</CardTitle>
            <ArrowImg src={data.icon} />
            <CardDescription>{data.description}</CardDescription>
          </Card>
        ))}
        <Card>
          <CardTitle>
            POLITICAL <br /> CONSULTANCY AND <br /> CAMPAIGNS
          </CardTitle>
          <ArrowImg src="/images/arrow-img-light.png" style={{ bottom: "5.9rem" }}/>
          <CardDescription style={{ top: "1rem" }}>
            I help you to understand what’s driving an issue, the key players,
            and how they can be swayed.
          </CardDescription>
        </Card>
      </CardContainer>
    </Container>
  );
}

const Container = styled.div`
  /* padding: 5rem 0; */
`;
const Header = styled.div`
  display: flex;
  align-items: center;
`;
const Bar = styled.div`
  background: #29a077;
  height: 5px;
  width: 35px;
  margin-right: 20px;
`;
const Title = styled.h4`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #0a0a0a;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  width: 100%;
  height: 400px;
`;
const Card = styled.div`
  padding: 2rem;
  width: 28%;
  color: #1e1e1e;
  border-radius: 5px;

  &:first-child {
    background: #bad0e4;
  }
  &:nth-child(2) {
    background: #3a53e3;
    color: #f2fbf4;
  }
  &:last-child {
    background-color: #29282b;
    color: #f2fbf4;
  }
`;
const CardTitle = styled.h5`
  font-family: "Public Sans";
  font-style: normal;
  font-size: 15px;
  line-height: 1.5;
  white-space: pre
`;
const CardDescription = styled.p`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  width: 70%;
  position: relative;
  top: 5rem;
`;
const ArrowImg = styled.img`
  position: relative;
  bottom: 3rem;
  left: 19rem;
  width: 35px;
`;
const data = [
  {
    title: "EXECUTIVE COACHING",
    description:
      "Unleash your full potential with executive coaching for Boards, CEOs and executives.",
    icon: "/images/arrow-img-dark.png",
  },
  {
    title: "LEADERSHIP DEVELOPMENT",
    description:
      "Let's create leaders in your organization with a leadership development program.",
    icon: "/images/arrow-img-light.png",
  },
  // {
  //   title: "POLITICAL CONSULTANCY AND CAMPAIGNS",
  //   description:
  //     "I help you to understand what’s driving an issue, the key players, and how they can be swayed.",
  // },
];
export default Capabilities;
