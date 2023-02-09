import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Card from "../news/Card";

function News() {
  return (
    <Container data-scroll-section>
      <div className="container">
        <TextHeader>
          <div>
            <Bar />
            <SubTitle>MON JOURNAL</SubTitle>
          </div>
          <CustomLink href="/news">ALL ARTICLES</CustomLink>
        </TextHeader>
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
            />
          ))}
        </CardRow>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background: linear-gradient(
    58.69deg,
    #000000 37.44%,
    rgba(0, 0, 0, 0.92) 64.04%,
    rgba(0, 0, 0, 0.85) 88.5%,
    rgba(0, 0, 0, 0.64) 107.13%
  );
  min-height: 70rem;
  padding: 5rem 0;
`;

const TextHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Bar = styled.div`
  background: #29a077;
  height: 5px;
  width: 35px;
  margin-right: 20px;
`;
const SubTitle = styled.h5`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;

  text-transform: uppercase;
  color: #fff;
`;
const CustomLink = styled.a`
  text-transform: uppercase;
  color: #9b9a9a;
`;

const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

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

export default News;
