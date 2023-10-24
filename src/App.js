import './App.css';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Navigation from './components/pages/Navigation';
import Skills from './components/pages/Skills';
import Footer from './components/pages/Footer';
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import Project from './components/pages/Project';
import Resume from './components/pages/Resume';
function App() {
  return (
    <div>
       <Router>
        <div className="App"> 
          <Switch>
            <Route exact path="/Home" component={Home}></Route>
            <Route exact path="/Navigation" component={Navigation}></Route>
            <Route exact path="/About" component={About}></Route>
            <Route exact path="/Skills" component={Skills}></Route>
            <Route exact path="/Project" component={Project}></Route>
            <Route exact path="/Resume" component={Resume}></Route>
            <Route exact path="/Footer" component={Footer}></Route>
          </Switch>
        </div> 
          <Navigation />
          <Home />
          <About />
          <Skills />
          <Project />
          <Footer />
      </Router> 
    </div>
  );
}
export default App;