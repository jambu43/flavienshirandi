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
};

export const Card: React.FC<Props> = ({
  doteColor,
  date,
  title,
  type,
  img,
  extract,
  position,
}) => {
  return (
    <CardContainer position={position ? position : ""}>
      <CardHead>
        <Dote doteColor={doteColor} />
        <Date>{date}</Date>
      </CardHead>

      <Title>{title}</Title>
      <TextType>Type</TextType>
      <TextContentType>{type}</TextContentType>
      <CardContent>
        <MiniSquare />
        <CardImage src={img} />
        <CardExtract>{extract}</CardExtract>
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
const Date = styled.p`
  color: #d9b5b5;
  font-size: 12px;
  margin-left: 10px;
`;
const Title = styled.h2`
  color: rgba(237, 218, 218, 0.82);
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
`;

const TextType = styled.p`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #b0a5a5;
`;
const TextContentType = styled.p`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: rgba(255, 211, 211, 0.6);
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
const CardExtract = styled.p`
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 168%;
  text-align: right;
  color: rgba(221, 219, 219, 0.72);
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
