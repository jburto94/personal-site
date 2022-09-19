import Header from "./components/Header";
import About from "./components/About";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
    <div className='App'>
      <Header />
      <About />
    </div>
  );
};

export default App;
