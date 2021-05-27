import React from "react";
import Northern from "./img/n.png";
import Southern from "./img/s.png";
import "./hemisphere.css";

const hemisphereConfig = {
  Northern: {
    text: 'burası kuzey yarımküre',
    picture: Northern,
  },
  Southern: {
    text: 'burası güney yarımküre',
    picture: Southern,
  },
};

const HemisphereDisplay = ({ latitude }) => {
  const hemisphere = latitude > 0 ? 'Northern' :  'Southern';
  const { text, picture } = hemisphereConfig[hemisphere];

  return (
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt="Loksyon" />
        </div>
        <div className="ui teal bottom attached label"></div>
        <h1> Lokasyon : {text} </h1>
      </div>
    </div>
  );
};
export default HemisphereDisplay;
