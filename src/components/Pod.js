import React from "react";
import styled from "styled-components";

const SpacePod = styled.div`
  display: flex;
  justify-content: center;
  background-color: #c4daf2;
  border: 1px solid #d3d3d3;
  margin: 15px 0;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;
const SpaceImg = styled.img`
  width: 60%;
`;

const Pod = props => {
  return (
    <SpacePod className="apod-wrapper">
      <SpaceImg alt="apod thumbnail" className="apod-image" src={props.pod} />
    </SpacePod>
  );
};

export default Pod;
