import React from "react";
import styled from "styled-components";

function Brand() {
  return (
    <div className="container">
      <BrandContainer>
        <TitleContainer>
          <TitleBrand>
            Becoming a <GreenText>great leader</GreenText> doesn't just happen
            <GreenText>.</GreenText>
          </TitleBrand>
          <Line />
        </TitleContainer>
        <BrandContent>
          <Brands>
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
          <BrandDescription>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit.Lorem ipsum dolor sit amet consectetur
            adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
            ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
            augue. Vestibulum auctor ornare leo, non suscipit.
          </BrandDescription>
          <BrandVector src="/images/home/brands/vector.png" />
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
  font-size: 10px;
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
