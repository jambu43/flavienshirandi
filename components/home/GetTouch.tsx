import React from "react";
import styled from "styled-components";
function GetTouch() {
  return (
    <Container data-scroll-section>
      <Title>Get In Touch</Title>
      <Action href="#">
        <Icon className="uil uil-arrow-right" />
      </Action>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
`;
const Title = styled.h4`
  margin: 0;
  color: rgba(56, 56, 56, 0.63);
  font-weight: 800;
  font-size: 260px;
  text-align: center;
`;
const Action = styled.a`
  position: relative;
  width: 150px;
  height: 150px;
  background-color: #009e6f;
  display: inline-block;
  border-radius: 100%;
  bottom: 19rem;
  left: 46rem;
`;
const Icon = styled.i`
  font-size: 7rem;
  position: relative;
  left: 17px;
  bottom: 8px;
  color: #fff;
`;
export default GetTouch;
