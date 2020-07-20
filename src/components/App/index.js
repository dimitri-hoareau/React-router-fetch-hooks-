// == Import npm
import React from "react";

// == Import
import Header from "../Header";
import Posts from "../Posts";
import Footer from "../Footer";

import categoriesData from "src/data/categories";
import postsData from "src/data/posts";

// == Composant
const App = () => (
  <div className="blog">
    <Header categories={categoriesData} />
    <Posts posts={postsData} />
    <Footer />
  </div>
);

// == Export
export default App;
