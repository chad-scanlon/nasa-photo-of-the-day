import React from "react";
import styled from "styled-components";

const SpaceAbout = styled.div`
  margin-top: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SpaceInfo = styled.p`
  color: #0a2352;
  width: 65%;
  text-align: left;
`;
const SpaceAuthor = styled.p`
  color: #0a2352;
  font-size: 1.1rem;
  font-weight: bold;
`;

const PodInfo = props => {
  return (
    <SpaceAbout className="apod-info">
      <SpaceInfo>{props.info}</SpaceInfo>
      <SpaceAuthor>© {props.author} </SpaceAuthor>
    </SpaceAbout>
  );
};

export default PodInfo;
