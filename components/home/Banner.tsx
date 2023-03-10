import Link from "next/link";
import React, { useRef } from "react";
import styled from "styled-components";

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
        <Title
          data-scroll
          data-scroll-speed="3"
        >
          J'accompagne les leaders à obtenir des résultats en utilisant des
          méthodes disruptives et responsables.
        </Title>
        <Description  data-scroll data-scroll-speed="3">
          Je crois en la capacité des leaders à apporter une contribution
          significative aux entreprises, et je suis convaincus que leur réussite
          est directement liée à l'adoption de méthodes disruptives et
          responsables. J’accompagne donc les leaders dans leurs efforts pour
          obtenir des résultats supérieurs grâce à l’utilisation de méthodes
          disruptives et responsables en leurs offrant des outils et des
          ressources nécessaires pour faire face à la pression organisationnelle
          ainsi qu'aux enjeux actuels et futurs.
        </Description>
        <Action data-scroll data-scroll-speed="3">SCROLL TO DISCOVER</Action>
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
`;
const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 134.5%;
  color: #848484;
  width: 80%;
`;
const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
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
