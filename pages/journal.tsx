import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import News from "../components/about/News";
import Card from "../components/news/Card";
function journal() {
  return (
    <BasedComponent>
      <Layout
        bgColor="transparent"
        textColor="#000000b8"
        logo="logo/logo-dark.png"
      >
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
              color="#040404d1"
            />
          ))}
        </CardRow>
        </div>
      </Layout>
    </BasedComponent>
  );
}

const BasedComponent = styled.div`
  /* background: linear-gradient(142.47deg, rgba(58, 229, 96, 0.31) 0.78%, rgba(217, 217, 217, 0) 60.89%); */

  /* background: linear-gradient(
    142.47deg,
    rgba(58, 96, 229, 0.31) 0.78%,
    rgb(255, 255, 255) 60.89%
  ); */
  background: linear-gradient( 142.47deg,rgba(58, 96, 229, 0.45) 0.78%,rgb(255,255,255) 60.89% );
`;
const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 70rem ;
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
  color: rgba(0, 0, 0, 1);

`;
const CustomLink = styled.a`
  text-transform: uppercase;
  color: #9b9a9a;
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



export default journal;
