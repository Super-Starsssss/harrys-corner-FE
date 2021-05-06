import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main'
import Home from './components/Home'
import Register from './components/Register'
import Exam from './components/Exam';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Switch >
        <Route path='/login' component={Main} />
        <Route path="/register" component={Register}/>
        <Route path="/" exact component={Home} />
        <Route path="/example" component={Exam} />
      </Switch>
      </div>
    </Router>
  );
}


export default App;
