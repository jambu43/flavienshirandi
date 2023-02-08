import React from "react";
import styled from "styled-components";
function Expertise() {
  return (
    <Container>
      <ExpertiseContainer data-scroll-section>
        <ExpertiseDescription>
          <div className="container" data-scroll data-scroll-speed="1">
            <Title>Expertises.</Title>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit.
            </Description>
          </div>
        </ExpertiseDescription>
        <ExpertiseImage src="/images/vector10.png" />
      </ExpertiseContainer>
      <div className="container">
        <Row>
          <Card style={{ bottom: "7rem" }}>
            <Square />
            <TitleCard>Expertises®</TitleCard>
            <DescriptionCard>
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit.
            </DescriptionCard>
          </Card>
          <LineBar  style={{ top: "5rem" }}/>
          <Card style={{ top: "5rem" }}>
            <Square />
            <TitleCard>Expertises®</TitleCard>
            <DescriptionCard>
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit.
            </DescriptionCard>
          </Card>
          <LineBar style={{ top: "8rem" }} />
          <Card style={{ top: "8rem" }}>
            <Square />
            <TitleCard>Expertises®</TitleCard>
            <DescriptionCard>
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit.
            </DescriptionCard>
          </Card>
        </Row>
      </div>
    </Container>
  );
}


const Container = styled.div`
  background-color: #fff;
  padding: 5rem 0 12rem 0;
`;
const ExpertiseContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ExpertiseDescription = styled.div`
  width: 50%;
  text-align: right;
`;
const ExpertiseImage = styled.img`
  width: 50%;
`;
const Title = styled.h3`
  color: rgba(30, 30, 30, 0.2);
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
`;
const Description = styled.p`
  color: #1e1e1e;
  font-size: 14px;
  position: relative;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 2rem;
`;
const Card = styled.div`
  width: 25%;
  position: relative;
`;
const TitleCard = styled.h4`
  color: #1e1e1e;
  font-weight: 400;
`;
const DescriptionCard = styled.p`
  color: #1e1e1e;
  font-size: 12px;
`;
const Square = styled.div`
  width: 20px;
  height: 20px;
  background-color: #009e6f;
`;

const LineBar = styled.div`
  background-color: #5F5C5C;
  width: .5px;
  height: 200px;
  position: relative;
`;

export default Expertise;
