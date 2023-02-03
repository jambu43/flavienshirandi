import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Banner() {
  return (
    <div className="container">
      <BannerComponent>
        <DescriptionBlock>
          <Title>
            Assist you get – and stay – ready to take on the leadership
            challenges you face.{" "}
          </Title>
          <Description>
            With 18 years’ experience in leadership consulting. We've built a
            reputation for delivering real impact for our clients — from the
            world’s largest companies to politicals to nonprofits.
          </Description>
          <Line />
          <SignUpTitle>Sign up</SignUpTitle>
          <SignUpDescription>
            Receive Flavien Shirandi’s latest analysis.
          </SignUpDescription>
          <FormRow>
            <SelectTopic />
            <EmailInput />
          </FormRow>
        </DescriptionBlock>
        <AboutImageContainer>
          
          <AboutImage src="/images/about/about-banner.png" />
        </AboutImageContainer>
      </BannerComponent>
    </div>
  );
}

const BannerComponent = styled.div`
  /* height: 900px; */
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 8rem 0;
`;
const DescriptionBlock = styled.div`
  width: 50%;
`;
const Title = styled.h1`
  font-family: "Public Sans";
  font-weight: 500;
  font-size: 55px;
  color: #0a0a0a;
`;

const Description = styled.p`
  font-family: "Neurial Grotesk";
  font-weight: 100;
  font-size: 16px;
  color: #6c6a6a;
  width: 55%;
  margin-bottom: 2rem;
`;
const Line = styled.div`
  border: 0.1px solid #000000;
  width: 50%;
`;
const SignUpTitle = styled.h3`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  color: #0a0a0a;
  margin-bottom: 1.3rem;
`;
const SignUpDescription = styled.p`
  font-family: "Neurial Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #6c6a6a;
`;
const FormRow = styled.div`
  display: flex;
  margin-top: 3rem;
`;
const SelectTopic = styled.select`
  background: rgba(255, 255, 255, 0.51);
  border: 2px solid rgba(95, 92, 92, 0.25);
  box-shadow: 0px 4px 112px rgba(223, 223, 223, 0.25);
  border-radius: 5px;
  width: 200px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-right: 0;
  height: 65px;
  
`;
const EmailInput = styled.input`
  height: 65px;
  background: rgba(255, 255, 255, 0.51);
  border: 2px solid rgba(95, 92, 92, 0.25);
  box-shadow: 0px 4px 112px rgba(223, 223, 223, 0.25);
  border-radius: 5px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  width: 250px;
`;
 const AboutImageContainer = styled.div``;
const AboutImage = styled.img`
  width: 80%;
`;

export default Banner;
