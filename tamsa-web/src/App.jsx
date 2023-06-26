import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar"
import Team from "./pages/Team"
import Purchase from "./pages/Purchase"
import Home from "./pages/Home"
import Contact from "./pages/Contacts"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/team' component={Team} />
        <Route path='/purchase' component={Purchase} />
        <Route path='/contacts' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;