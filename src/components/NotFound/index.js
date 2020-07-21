import React, { useState } from "react";
import "./style.scss";

const NotFound = () => {
  const [opened, setOpened] = useState(true);
  const [person, setPerson] = useState({
    prenom: "Charlotte",
    birthday: true,
    age: 22,
  });

  // Pour modifier le state "person"
  // avec une class, j'aurais pu faire ça
  // this.setState({ birthday: false });
  // Avec les hooks, la méthode qui modifie mon state
  // l'écrase COMPLÈTEMENT
  // setPerson({ ...person, birthday: false })
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
