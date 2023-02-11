import React from "react";
import styled from "styled-components";

export type Props = {
  doteColor: string;
  date: string;
  title: string;
  type: string;
  img: string;
  extract: string;
  position: string;
  color: string;
};

export const Card: React.FC<Props> = ({
  doteColor,
  date,
  title,
  type,
  img,
  extract,
  position,
  color
}) => {
  return (
    <CardContainer position={position ? position : ""}>
      <CardHead>
        <Dote doteColor={doteColor} />
        <Date color={color ? color : "#8c8c8c"}>{date}</Date>
      </CardHead>

      <Title color={color ? color : "#fff"}>{title}</Title>
      <TextType color={color ? color : "#8c8c8c"}>Type</TextType>
      <TextContentType color={color ? color : "#8c8c8c"}>{type}</TextContentType>
      <CardContent>
        <MiniSquare />
        <CardImage src={img} />
        <CardExtract color={color ? color : "#8c8c8c"}>{extract}</CardExtract>
        <ReadMor href="#">Read more</ReadMor>
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled.div<Props>`
  width: 25%;
  position: relative;
  top: ${(props)=> props.position};
`;
const CardHead = styled.div`
  display: flex;
  align-items: center;
`;
const CardContent = styled.div`
  text-align: right;
`;
const Dote = styled.div<Props>`
  width: 10px;
  height: 10px;
  background: ${(props) => props.doteColor};
  border-radius: 100%;
`;
const Date = styled.p<Props>`
  color: ${(props) => props.color};
  font-size: 12px;
  margin-left: 10px;
`;
const Title = styled.h2<Props>`
  color: ${(props) => props.color};
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
`;

const TextType = styled.p<Props>`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color:${(props) => props.color};
`;
const TextContentType = styled.p<Props>`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.color};
`;
const MiniSquare = styled.div`
  background: #009e6f;
  width: 15px;
  height: 15px;
  margin-left: auto;
`;
const CardImage = styled.img`
  width: 100%;
  margin-top: 15px;
`;
const CardExtract = styled.p<Props>`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 168%;
  text-align: right;
  color: ${(props) => props.color};
  margin-top: 20px;
`;

const ReadMor = styled.a`
  text-transform: uppercase;
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 169.5%;
  text-align: right;
  letter-spacing: 0.205em;
  text-decoration-line: underline;

  color: #009e6f;
`;
export default Card;
