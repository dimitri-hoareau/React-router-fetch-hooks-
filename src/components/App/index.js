// == Import npm
import React from "react";

// == Import
import Header from "../Header";
import Posts from "../Posts";
import Footer from "../Footer";

// == Composant
const App = () => (
  <div className="blog">
    <Header />
    <Posts />
    <Footer />
  </div>
);

// == Export
export default App;
