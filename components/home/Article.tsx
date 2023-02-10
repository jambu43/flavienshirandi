import React from "react";
import styled from "styled-components";
import Card from "../news/Card";

function Article() {
  return (
    <ArticleContainer data-scroll-section>
      <div className="container">
        <Title>Articles & Analysis</Title>
        <CardRow>
            {data.map((data, key) => (
              <Card
                key={key}
                doteColor={data.doteColor}
                date={data.date}
                title={data.title}
                type={data.type}
                img={data.img}
                extract={data.extract}
                position={data.position}
                color="#040404d1"
              />
            ))}
          </CardRow>

      </div>
    </ArticleContainer>
  );
}

const ArticleContainer = styled.div`
  background-color: #fff;
  padding: 5rem 0;
`;

const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 70rem;
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


const data = [
  {
    doteColor: "#29a077",
    date: "03 JAN 2023",
    title: "Lorem ipsum dolor sit amet.",
    type: " TRIBUNE ANALYSE",
    img: "/images/articles/article2.png",
    extract:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit.",
  },
  {
    doteColor: "#9E8E00;",
    date: "03 JAN 2023",
    title: "Lorem ipsum dolor sit amet.",
    type: " TRIBUNE ANALYSE",
    img: "/images/articles/article1.png",
    extract:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit.",
    position: "10rem",
  },
  {
    doteColor: "#9E0000;",
    date: "03 JAN 2023",
    title: "Lorem ipsum dolor sit amet.",
    type: " TRIBUNE ANALYSE",
    img: "/images/articles/article3.png",
    extract:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit.",
  },
];
