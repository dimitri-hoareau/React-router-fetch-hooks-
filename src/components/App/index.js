// == Import npm
import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// == Import
import Header from "../Header";
import Posts from "../Posts";
import Footer from "../Footer";
import NotFound from "../NotFound";
import categoriesData from "src/data/categories";
import postsData from "src/data/posts";
import Loading from "../Loading";
import NotFoud from "../NotFound";

/*

Créer un composant Loading.
L'importer dans App
Créer un state (hooks) pour savoir si l'app est en cours de loading ou pas
Si oui, afficher le composant Loading
Sinon, afficher le composant normal


*/

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
const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="blog">
      <Header categories={categoriesData} />
      <button
        onClick={() => {
          setLoading(!loading);
        }}
      >
        Load
      </button>
      {loading && <Loading />}
      {!loading && (
        <Switch>
          {categoriesData.map((category) => {
            return (
              <Route key={category.label} exact path={category.route}>
                <Posts posts={getFilteredPosts(category.label)} />
              </Route>
            );
          })}
          <Redirect from="/jquery" to="/react" />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      )}

      <Footer />
    </div>
  );
};
// == Export
export default App;
