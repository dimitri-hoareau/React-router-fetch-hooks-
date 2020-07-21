import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound";
import "./single.scss";

const View = ({ posts }) => {
  const { titreSlugifie } = useParams();
  console.log(titreSlugifie);
  // Trouver dans le tableau "posts" l'objet
  // dont le .slug est égal à mon titreSlugifie
  const article = posts.find((elem) => {
    return elem.slug === titreSlugifie;
  });

  if (!article) {
    return <NotFound />;
  }

  return (
    <article className="single">
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </article>
  );
};

export default View;
