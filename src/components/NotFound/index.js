import React, { useState } from "react";
import "./style.scss";

const NotFound = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div className="not-found">
      <h2
        onClick={() => {
          setOpened(!opened);
        }}
      >
        404
      </h2>
      <p>Désolé, cette page n'existe pas</p>
      {opened && (
        <img src="https://c4.wallpaperflare.com/wallpaper/432/592/854/website-link-zelda-the-legend-of-zelda-wallpaper-preview.jpg" />
      )}
    </div>
  );
};
export default NotFound;
