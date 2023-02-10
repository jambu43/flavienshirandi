import React from "react";
import styled from "styled-components";

function Brand() {
  return (
    <div className="container" data-scroll-section>
      <BrandContainer>
        <TitleContainer>
          <TitleBrand data-scroll data-scroll-speed="3" className="animate__animated animate__fadeInLeft animate__delay-1s animate__repeat-2 ">
            Becoming a <GreenText>great leader</GreenText> doesn't just happen
            <GreenText>.</GreenText>
          </TitleBrand>
          <Line />
        </TitleContainer>
        <BrandContent>
          <Brands data-scroll data-scroll-speed="3">
            <BrandImg
              src="/images/home/brands/transp-hires-words.png"
              style={{ width: "100px" }}
            />
            <BrandImg
              src="/images/home/brands/coca.png"
              style={{ width: "150px" }}
            />
            <BrandImg
              src="/images/home/brands/jp-morgan-chase-logo.png"
              style={{ width: "158px" }}
            />
            <BrandImg
              src="/images/home/brands/walmart-transparent.png"
              style={{ width: "200px" }}
            />
            <BrandImg
              src="/images/home/brands/armoirie.png"
              style={{ width: "100px" }}
            />
            <BrandImg
              src="/images/home/brands/coat_of_arms_of_south_africa.png"
              style={{ width: "75px" }}
            />
            <BrandImg
              src="/images/home/brands/companies-presidents-of-republics.png"
              style={{ width: "400px" }}
            />
          </Brands>
          <BrandDescription data-scroll data-scroll-speed="3">
            In the 21st century, human behaviours have changed dramatically and
            so have expectations of the overall experience. Leaders must address
            this growing reality to deliver changing value; this requires a deep
            understanding of the environment, human behaviours, as well as an
            understanding of leadership as a whole. For more than 15 years, I
            have been coaching Fortune 500 leaders and more than 7 Presidents of
            republics towards excellence by developing best practices to gain
            insight, impact and positive influence on a daily basis in a
            sustainable way.
          </BrandDescription>
          <BrandVector
            src="/images/home/brands/vector.png"
            data-scroll
            data-scroll-speed="3"
          />
        </BrandContent>
      </BrandContainer>
    </div>
  );
}

const BrandContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5rem 0;
`;
const TitleContainer = styled.div`
  width: 30%;
`;

const TitleBrand = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 68px;
  line-height: 87px;
  color: #848484;
  margin: 0;
`;
const Line = styled.div`
  height: 2px;
  width: 50px;
  background-color: #009e6f;
`;
const GreenText = styled.span`
  color: #009e6f;
`;

const BrandContent = styled.div`
  width: 50%;
`;

const Brands = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const BrandImg = styled.img`
  margin-right: 30px;
  margin-top: 20px;
`;
const BrandDescription = styled.p`
  font-size: 14px;
  color: #848484;
  margin-top: 5rem;
  width: 70%;
`;
const BrandVector = styled.img`
  position: relative;
  width: 100%;
  bottom: 15%;
`;

export default Brand;
