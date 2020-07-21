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
import Loading from "../Loading";
import View from "../Posts/View";

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
  const [categories, setCategories] = useState([]);
  // const [globalState, setGlobalState] = useState({ loading: false, articles: [] });

  const fetchAPI = async (url, method) => {
    setLoading(true);
    // Utiliser axios pour faire la requête
    try {
      const res = await axios({
        method: "get",
        url: url,
      });
      console.log(res.data[2]);
      method(res.data);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };
  // Lorsque mon composant est monté
  // exécuter fetchData
  useEffect(() => {
    fetchAPI(
      "https://oclock-open-apis.now.sh/api/blog/categories",
      setCategories
    );
    fetchAPI("https://oclock-open-apis.now.sh/api/blog/posts", setArticles);
  }, []);

  return (
    <div className="blog">
      <Header categories={categories} />
      {loading && <Loading />}
      {!loading && (
        <Switch>
          {categories.map((category) => {
            return (
              <Route key={category.label} exact path={category.route}>
                <Posts posts={getFilteredPosts(articles, category.label)} />
              </Route>
            );
          })}

          <Route path="/articles/:titreSlugifie">
            <View posts={articles} />
          </Route>
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
