import Navbar from "./Navbar";
import Home from "./Home";
import Header from "./Header";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Header title="1.1 Stoichiometric reactions" />
        <Home />
      </div>
    </div>
  );
};

export default App;
