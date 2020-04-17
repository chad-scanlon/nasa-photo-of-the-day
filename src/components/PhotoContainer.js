import React, { useState, useEffect } from "react";
import axios from "axios";
import PodHeader from "./PodHeader";
import Pod from "./Pod";
import PodInfo from "./PodInfo";

const PhotoContainer = () => {
  const [apod, setPhoto] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod/?api_key=8AumG70uHoEAoLzHnRJDLegfzeZ6W5vY9f959Lu4"
      )
      .then((response) => {
        console.log(response);
        setPhoto(response.data);
      })
      .catch((error) => {
        console.log("no idea", error);
      });
  }, []);
  return (
    <div>
      <PodHeader title={apod.title} date={apod.date} />
      <Pod pod={apod.url} />
      <PodInfo info={apod.explanation} author={apod.copyright} />
    </div>
  );
};

export default PhotoContainer;
