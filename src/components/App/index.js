// == Import npm
import React from "react";
import { Route } from "react-router-dom";
// == Import
import Header from "../Header";
import Posts from "../Posts";
import Footer from "../Footer";

import categoriesData from "src/data/categories";
import postsData from "src/data/posts";

const getFilteredPosts = (category) => {
  // Doit me RETURN
  // un tableau de posts filtrés
  // selon la catégorie reçue
  // (si la catégorie === 'Accueil') je veux tous les posts
  if (category === "Accueil") {
    return postsData;
  }
  return postsData.filter((post) => post.category === category);
};

// == Composant
const App = () => (
  <div className="blog">
    <Header categories={categoriesData} />
    <Route exact path="/">
      <Posts posts={getFilteredPosts("Accueil")} />
    </Route>
    <Route exact path="/angular">
      <Posts posts={getFilteredPosts("Angular")} />
    </Route>
    <Route exact path="/react">
      <Posts posts={getFilteredPosts("React")} />
    </Route>
    <Route exact path="/autre">
      <Posts posts={getFilteredPosts("Autre")} />
    </Route>
    <Route exact path="/oclock">
      <Posts posts={getFilteredPosts("O’clock")} />
    </Route>
    <Footer />
  </div>
);

// == Export
export default App;
