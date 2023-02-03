import React from "react";
import styled from "styled-components";
function Capabilities() {
  return (
    <Container>
      <Header>
        <Bar />
        <Title>SHIRANDI’S CAPABILITIES</Title>
      </Header>
      <CardContainer>
        {data.map((data) => (
          <Card>
            <CardTitle>{data.title}</CardTitle>
            <CardDescription>{data.description}</CardDescription>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 5rem 0;
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
    color:#F2FBF4;
  }
  &:last-child {
    background-color: #29282b;
    color:#F2FBF4;
  }
`;
const CardTitle = styled.h5`
  font-family: "Public Sans";
  font-style: normal;
  font-size: 15px;


`;
const CardDescription = styled.p`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  width: 70%;
  position: relative;
  top: 9rem;
`;

const data = [
  {
    title: "EXECUTIVE COACHING",
    description:
      "Unleash your full potential with executive coaching for Boards, CEOs and executives.",
  },
  {
    title: "LEADERSHIP DEVELOPMENT",
    description:
      "Let's create leaders in your organization with a leadership development program.",
  },
  {
    title: "POLITICAL CONSULTANCY AND CAMPAIGNS",
    description:
      "I help you to understand what’s driving an issue, the key players, and how they can be swayed.",
  },
];
export default Capabilities;
