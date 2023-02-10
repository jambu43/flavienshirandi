import Link from "next/link";
import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";

function Banner() {
  return (
    <BannerComponent data-scroll-section>
      <SocialContainer data-scroll data-scroll-speed="3">
        <Link href="#">
          <SocialLink>Twitter</SocialLink>
        </Link>
        <Link href="#">
          <SocialLink>Linkedin</SocialLink>
        </Link>
        <Link href="#">
          <SocialLink>Youtube</SocialLink>
        </Link>
        <Link href="#">
          <SocialLink>Facebook</SocialLink>
        </Link>
      </SocialContainer>
      <ImgContainer>
        <ImgCircle src="/images/home/circle.png" />
      </ImgContainer>
      <DescriptionContainer>
        <Title data-scroll data-scroll-speed="3" className="animate__animated animate__fadeInDown  ">
          Coach leaders to achieve results using disruptive and responsible
          methods.
        </Title>

        <Description data-scroll data-scroll-speed="3" className="animate__animated animate__fadeInDown ">
          I believe in the ability of leaders to make a significant contribution
          to business, and I am convinced that their success is directly linked
          to the adoption of disruptive and responsible methods.
        </Description>
        <Action data-scroll data-scroll-speed="3" className="animate__animated animate__fadeInDown ">
          SCROLL TO DISCOVER
          <i className="uil uil-arrow-down"></i>
        </Action>
        <CopyrightContainer data-scroll data-scroll-speed="3">
          <Text>
            N 43’30”32.0 <br />O 43’30”32.0
          </Text>
          <Text>@2023</Text>
        </CopyrightContainer>
      </DescriptionContainer>
    </BannerComponent>
  );
}

const BannerComponent = styled.div`
  height: 900px;
  display: flex;
  width: 100%;
  padding: 0 5rem;
  align-items: center;
`;
const SocialContainer = styled.div`
  width: 30%;
  position: relative;
  top: 28%;
`;
const ImgContainer = styled.div`
  width: 35%;
  align-items: flex-end;
`;
const ImgCircle = styled.img`
  width: 500px;
  top: 29%;
  position: relative;
`;
const DescriptionContainer = styled.div`
  width: 35%;
  position: relative;

  & h1:nth-child(1) {
	/* color: transparent; */
	/* -webkit-text-stroke: 1px #848484; */
  }

`;


const breatheAnimation = keyframes`
 from {
    font-size: 20px;
    font-weight: 100;
    opacity:0
  } 
  to {
    font-size: 50px;
    font-weight: 900;
    text-shadow: 0px 0px 5px white;
    opacity:1
  }
`;
const cursor = keyframes`
  0%, 100% { 
    border-color: #212121; 
  }
`
const text = keyframes`
   0%,10%,100%{
        width: 0;
    }
    70%,90%{
        width: 100%;
    }
`


const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 134.5%;
  color: #848484;
  width: 80%;
  &::before{
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #848484;
    -webkit-text-stroke: 0vw #383d52;

    overflow: hidden;
    /* animation: ${text} 6s linear infinite; */

}

  
`;
const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 154.5%;
  color: #848484;
  width: 80%;
  margin: 2rem 0 5rem;
`;
const Action = styled.a`
  border: 1px solid #848484;
  border-radius: 69px;
  padding: 0.5em 2rem;
  text-align: center;
  font-family: "Poppins", sans-serif;
  color: #848484;
  cursor: pointer;
  &:hover {
    color: #000;
    background-color: #fff;
  }
`;
const CopyrightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;
const Text = styled.p`
  color: #848484;
  font-size: 10px;
`;
const SocialLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  text-transform: uppercase;
  color: #848484;
  margin-left: 20px;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;



export default Banner;
