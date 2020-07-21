// == Import npm
import React, { useState, useEffect } from "react";
import regeneratorRuntime from "regenerator-runtime";
import axios from "axios";
import { Route, Switch, Redirect } from "react-router-dom";
// == Import
import Header from "../Header";
import Posts from "../Posts";
import Footer from "../Footer";
import NotFound from "../NotFound";
import categoriesData from "src/data/categories";
import Loading from "../Loading";

/*
Créer un composant Loading.
L'importer dans App
Créer un state (hooks) pour savoir si l'app est en cours de loading ou pas
Si oui, afficher le composant Loading
Sinon, afficher le composant normal
*/

const getFilteredPosts = (articles, category) => {
  // Doit me RETURN
  // un tableau de posts filtrés
  // selon la catégorie reçue
  // (si la catégorie === 'Accueil') je veux tous les posts
  if (category === "Accueil") {
    return articles;
  }
  return articles.filter((post) => post.category === category);
};

// == Composant
const App = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  // const [globalState, setGlobalState] = useState({ loading: false, articles: [] });

  const fetchData = async () => {
    setLoading(true);
    // Utiliser axios pour faire la requête
    try {
      const res = await axios({
        method: "get",
        url: "https://oclock-open-apis.now.sh/api/blog/posts",
      });
      console.log(res.data[2]);
      setArticles(res.data);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };
  // Lorsque mon composant est monté
  // exécuter fetchData
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="blog">
      <Header categories={categoriesData} />
      {loading && <Loading />}
      {!loading && (
        <Switch>
          {categoriesData.map((category) => {
            return (
              <Route key={category.label} exact path={category.route}>
                <Posts posts={getFilteredPosts(articles, category.label)} />
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
