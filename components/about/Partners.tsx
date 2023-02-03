import React from "react";
import styled from "styled-components";

function Partners() {
  return (
    <Content>
      <Container>
        {data.map((data)=>(
        <LogoContainer>
          <Logo src={`${data.path}`}  style={{ width: data.size }}/>
        </LogoContainer>
        ))}
      </Container>
    </Content>
  );
}

const Content = styled.div`
  margin: 5rem auto 10rem;
  width: 80%;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoContainer = styled.div`
`;
const Logo = styled.img`

`;

export default Partners;

const data = [
  {
    path: "/images/logo/oila.png",
    size: 100
  },
  {
    path: "/images/logo/coca.png",
    size:120
  },
  {
    path: "/images/logo/jp-morgan-chase-logo.png",
    size:120
  },
  {
    path: "/images/logo/walmarte.png",
    size:145
  },
  {
    path: "/images/logo/armoirie_pres.png",
    size:74
  },
  {
    path: "/images/logo/coat_of_arms_of_south_africa.png",
    size:60
  },
];
