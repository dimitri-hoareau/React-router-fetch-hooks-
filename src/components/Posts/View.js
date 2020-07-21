import React from "react";
import { useParams } from "react-router-dom";

const View = ({ posts }) => {
  const { titreSlugifie } = useParams();
  console.log(titreSlugifie);
  // Trouver dans le tableau "posts" l'objet
  // dont le .slug est égal à mon titreSlugifie
  // Soit je trouve un article
  // je l'affiche
  // Soit je ne trouve pas l'article
  // J'affiche page 404
  return <div>Je suis un article</div>;
};

export default View;
