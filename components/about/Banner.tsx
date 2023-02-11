import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Banner() {
  return (
    <BannerComponent data-scroll-section>
      <DescriptionBlock>
        <Title className="animate__animated ">
          Assist you get – and stay – ready to take on the leadership challenges
          you face.{" "}
        </Title>
        <Description className="animate__animated animate__fadeInDown ">
          With 18 years’ experience in leadership consulting. We've built a
          reputation for delivering real impact for our clients — from the
          world’s largest companies to politicals to nonprofits.
        </Description>
        <Line />
        <SignUpTitle>Sign up</SignUpTitle>
        <Description className="animate__animated animate__fadeInDown ">
          Receive Flavien Shirandi’s latest analysis.
        </Description>
        <FormRow>
          <SelectTopic placeholder="Select Topic">
            <option value="">Select Topic</option>
          </SelectTopic>
          <IconEmail className="uil uil-envelope" />
          <EmailInput placeholder="Your Email" />
          <SubmitFormBtn>
            <i className="uil uil-arrow-right"></i>
            {/* <img src="/images/right-arrow.png" alt="" /> */}
          </SubmitFormBtn>
        </FormRow>
      </DescriptionBlock>
      <AboutImageContainer>
        <AboutImage src="/images/about/about-banner.png" />
      </AboutImageContainer>
    </BannerComponent>
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
  position: relative;
  bottom: 5rem;
`;
const Title = styled.h1`
  font-family: "Public Sans";
  font-weight: 500;
  font-size: 55px;
  color: #0a0a0a;
  margin: 0;
`;

const Description = styled.p`
  font-family: "Questrial", sans-serif;
  font-weight: 100;
  font-size: 20px;
  color: #6c6a6a;
  margin-bottom: 2rem;
  line-height: 1.4;
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
  border: 1.5px solid rgba(95, 92, 92, 0.25);
  box-shadow: 0px 4px 112px rgba(223, 223, 223, 0.25);
  border-radius: 5px;
  width: 200px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-right: 0;
  height: 75px;
  color: #979797;
  font-size: 16px;
  padding: 20px;
  font-family: "Public Sans";
`;
const EmailInput = styled.input`
  height: 75px;
  background: rgba(255, 255, 255, 0.51);
  border: 1.5px solid rgba(95, 92, 92, 0.25);
  box-shadow: 0px 4px 112px rgba(223, 223, 223, 0.25);
  border-radius: 0px;
  width: 300px;
  color: #979797;
  font-size: 16px;
  padding: 20px 60px;
  font-family: "Public Sans";
  border-right: 0;
`;
const IconEmail = styled.i`
  position: absolute;
  font-size: 30px;
  left: 14rem;
  bottom: 14px;
  color: rgba(0, 0, 0, 0.52);
`;
const SubmitFormBtn = styled.button`
  border-radius: 1px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-width: 0px;
  background: rgba(255, 255, 255, 0.51);
  border: 1.5px solid rgba(95, 92, 92, 0.25);
  border-left: 0;
  color: rgba(155, 154, 154, 1);
  font-size: 45px;
  cursor: pointer;
  padding-right: 20px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
const AboutImageContainer = styled.div``;
const AboutImage = styled.img`
  width: 70%;
  position: relative;
  bottom: 2rem;
  left: 15rem;
`;

export default Banner;
