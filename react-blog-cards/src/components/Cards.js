import React from "react";
import Card from "./Card";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const cards = [
  {
    id: 1,
    title: "The soul of the world Web",
    image: image1,
    url: "https://github.com/settings/profile",
  },
  {
    id: 2,
    title: "The soul of the world Blog",
    image: image2,
    url: "http://127.0.0.1:5500/",
  },
  {
    id: 3,
    title: "The soul of the world Youtube",
    image: image3,
    url: "https://www.youtube.com/channel/UCexv5qq_dcykjXl8WExrvsA",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
