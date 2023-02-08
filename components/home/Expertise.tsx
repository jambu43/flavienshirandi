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
              Built-in solutions to help your organization achieve goals by
              equipping you with a clear understanding of what needs to be done
              and how it needs to be done.
            </Description>
          </div>
        </ExpertiseDescription>
        <ExpertiseImage src="/images/vector10.png" />
      </ExpertiseContainer>
      <div className="container">
        <Row>
          <Card style={{ bottom: "7rem" }}>
            <Square />
            <TitleCard>Political situation analysis®</TitleCard>
            <DescriptionCard>
              I advise leaders in identifying current political trends and
              anticipating future changes, so that they can make informed
              decisions that are relevant to their environment.
            </DescriptionCard>
          </Card>
          <LineBar style={{ top: "5rem" }} />
          <Card style={{ top: "5rem" }}>
            <Square />
            <TitleCard>Crisis management</TitleCard>
            <DescriptionCard>
              I support leaders in managing crisis situations effectively,
              helping them to identify risks, develop contingency plans, and
              communicate effectively with stakeholders.
            </DescriptionCard>
          </Card>
          <LineBar style={{ top: "8rem" }} />
          <Card style={{ top: "8rem" }}>
            <Square />
            <TitleCard>Leadership development</TitleCard>
            <DescriptionCard>
              Leadership development is synonymous with growth and success.
              Leadership development programmes must be aligned with your
              evolving needs. That's why my team and I develop coaching
              programmes that are precisely tailored to your organisation's
              needs and objectives.
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
  background-color: #5f5c5c;
  width: 0.5px;
  height: 200px;
  position: relative;
`;

export default Expertise;
