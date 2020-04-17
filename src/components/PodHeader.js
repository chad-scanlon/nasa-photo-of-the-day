import React from "react";
import styled from "styled-components";

const SpaceHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const SpaceTitle = styled.h1`
  color: #0a2352;
  font-style: italic;
`;

const SpaceDate = styled.h2`
  color: #0a2352;
  font-style: italic;
`;

const PodHeader = props => {
  return (
    <SpaceHeader className="apod-header">
      <SpaceTitle>{props.title}</SpaceTitle>
      <SpaceDate>{props.date}</SpaceDate>
    </SpaceHeader>
  );
};

export default PodHeader;
