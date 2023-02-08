import React from "react";
import styled from "styled-components";

function Article() {
  return (
    <ArticleContainer data-scroll-section>
      <div className="container">
        <Title>Articles & Analysis</Title>
      </div>
    </ArticleContainer>
  );
}

const ArticleContainer = styled.div`
  background-color: #fff;
  /* padding: 5rem 0; */
`;
const Title = styled.h3`
  color: rgba(30, 30, 30, 0.2);
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  width: 20%;
  margin-left: auto;
`
export default Article;
