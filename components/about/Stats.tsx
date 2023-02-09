import React from "react";
import styled from "styled-components";

function Stats() {
  return (
    <Content data-scroll-section>
      <Container>
        {data.map((data) => (
          <StatContent>
            <Number>{data.nbr}</Number>
            <Title>{data.title}</Title>
          </StatContent>
        ))}
      </Container>
      <Line />
    </Content>
  );
}
const Content = styled.div`
    padding: 5rem 0;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7rem;
`;
const StatContent = styled.div`
  display: flex;
  align-items: center;
  border-right: 0.5px solid rgba(0, 0, 0, 0.67);

  &:last-child {
    border: 0px;
  }
`;

const Number = styled.span`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;

  color: #3a52e5;
`;

const Title = styled.p`
  color: rgba(30, 30, 30, 0.67);
  font-size: 12px;
  width: 60%;
  margin-left: 20px;
`;
const Line = styled.div`
  border: 0.1px solid rgba(66, 66, 66, 0.62);
  width: 50%;
  margin: auto;
`;

export default Stats;

const data = [
  {
    nbr: "500",
    title: "Clients & Partners Trusted",
  },
  {
    nbr: "7+",
    title: "Political consultant for + 7 Presidents",
  },
  {
    nbr: "8+",
    title: "Books and political analysis published",
  },
  {
    nbr: "30+",
    title: "Companies created and projects funded",
  },
];
