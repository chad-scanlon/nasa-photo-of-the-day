import React from "react";

import PodHeader from "./PodHeader";
import Pod from "./Pod";
import PodInfo from "./PodInfo";

const PodCard = props => {
  return (
    <div>
      <PodHeader title={apod.title} date={apod.date} />
      <Pod pod={apod.url} />
      <PodInfo info={apod.explanation} author={apod.copyright} />
    </div>
  );
};

export default PodCard;
