import React from "react";
import styled from "styled-components";
function LineDote({ style }: any) {
  return (
    <Row style={style}>
      <Line />
      <Dote />
    </Row>
  );
}

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;
const Line = styled.div`
  height: 2px;
  width: 30px;
  background-color: #009e6f;
`;
const Dote = styled.div`
  width: 20px;
  height: 5px;
  background-color: #009e6f;
`;

export default LineDote;
