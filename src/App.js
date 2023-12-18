import About from "./component/About";
import Experience from "./component/Experience";
import Home from "./component/Home";
import Projects from "./component/Projects";
import NavBar from "./component/navbar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div>
      <Home/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Experience/>
      </div>
      <div>
        <Projects/>
      </div>
    </div>
  );
}

export default App;
