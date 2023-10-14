import "./slyles/reset.css";
import "./slyles/variables.css";
import "./slyles/common.css";

import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Brands from "./components/brands/Brands";
import Categories from "./components/categories/Categories";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Intro />
      </div>
      <Brands />
      <div className="container">
        <Categories/>
      </div>
    </div>
  );
}

export default App;
