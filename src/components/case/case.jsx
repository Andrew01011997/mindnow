import React from "react";
import styled from "styled-components";

const Case = ({ image, tags, title, description }) => {
  return (
    <ContentBox>
      <TagsContainer>
        {tags && tags.map((el, id) => <Tag key={id}>{el}</Tag>)}
      </TagsContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
    </ContentBox>
  );
};

const ContentBox = styled.div`
  display: flex;
  position: relative;
  max-height: 640px;
  margin-bottom: 50px;
  overflow: hidden;
`;

const TagsContainer = styled.div`
  margin: 100px;
  position: absolute;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: 40%;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  z-index: 2;
`;

const Tag = styled.span`
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.15);
  font-size: 1.1em;
  font-weight: 100;
  line-height: 1.33;
  letter-spacing: normal;
  color: #ffffff;
  padding: 10px 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Title = styled.h2`
  position: absolute;
  bottom: 125px;
  margin-bottom: 20px;
  margin-left: 100px;
  font-size: 3em;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #ffffff;
  z-index: 1;
`;

const Description = styled.p`
  font-size: 1.1em;
  font-weight: 200;
  line-height: 1.39;
  letter-spacing: normal;
  color: #ffffff;
  position: absolute;
  bottom: 100px;
  margin-left: 100px;
  margin-right: 40px;
  z-index: 1;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 640px;
  transition: all 3s ease;
  transform: scale(1, 1);
  opacity: 0.7;
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #0f0f0f4d;
    left: 0;
    top: 0;
  }
  &:hover {
    transition: all 3s ease;
    transform: scale(1.1, 1.1);
    opacity: 0.8;
  }
`;

export default Case;
