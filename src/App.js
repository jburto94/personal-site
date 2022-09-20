import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
    <div className='App'>
      <Header />
      <About />
      <Skills />
    </div>
  );
};

export default App;
