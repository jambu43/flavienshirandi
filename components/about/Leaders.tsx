import React from "react";
import styled from "styled-components";

function Leaders() {
  return (
    <Container data-scroll-section>
      <ImageContainer>
        <Image src="/images/about/leader.png" />
      </ImageContainer>
      <TextContainer>
        <TextHeader>
          <Bar />
          <SubTitle>By leaders, for leaders</SubTitle>
        </TextHeader>
        <Title>
          International <br /> <TitleColor>expertise</TitleColor> and leadership{" "}
          <br /> for your success.
        </Title>
        <Description>
          As a member of the International Leadership Association, a leading
          network in top executive coaching, I work with you to implement
          customized programs including leadership development workshops,
          executive coaching, team coaching, team assessments,
        </Description>
        <Description>
          and leadership and executive assessments.Researcher and University
          Professor, I contributed regularly to articles, debates and
          intellectual discussions at the University of Indina (Tobias
          Leadership) and the University of Oxford (LCLS).
        </Description>

        <ActionContainer>
          <ActionGreen>LOREM IPSUM</ActionGreen>
          <ActionTransparent>LOREM IPSUM</ActionTransparent>
        </ActionContainer>
      </TextContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 5rem 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const ImageContainer = styled.div`
  width: 30%;
`;
const Image = styled.img`
  width: 80%;
`;
const TextContainer = styled.div`
  width: 50%;
`;
const TextHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Bar = styled.div`
  background: #29a077;
  height: 5px;
  width: 35px;
  margin-right: 20px;
`;
const SubTitle = styled.h5`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;

  text-transform: uppercase;
  color: #0a0a0a;
`;

const Title = styled.h3`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  color: #0a0a0a;
`;
const TitleColor = styled.span`
  color: #29a077;
`;
const Description = styled.p`
  font-family: "Neurial Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #6c6a6a;
  width: 80%;
`;

const ActionContainer = styled.div`
  display: flex;
  margin-top: 3rem;
`;
const ActionGreen = styled.a`
  background: #29a077;
  border-radius: 5px;
  padding: 1.2rem 3rem;
  font-size: 10px;
  color: #fff;
`;
const ActionTransparent = styled.a`
  border: 1px solid #29a077;
  border-radius: 5px;
  padding: 1.2rem 3rem;
  font-size: 10px;
  color: #292929;
  margin-left: 2rem;
`;

export default Leaders;
