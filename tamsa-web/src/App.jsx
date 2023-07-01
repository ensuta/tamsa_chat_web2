import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import Team from "./pages/Team"
import Purchase from "./pages/Purchase"
import Home from "./pages/Home"
import Contact from "./pages/Contacts"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/team' element={<Team />} />
        <Route path='/purchase' element={<Purchase />} />
        <Route path='/contacts' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;