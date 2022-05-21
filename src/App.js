import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import VolcanoList from './Components/VolcanoList/VolcanoList';
import VolcanoDetails from './Components/VolcanoDetails/VolcanoDetails';
import NavBar from './Components/NavBar/NavBar';
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/login" element={< Login />} />
        <Route path="/register" element={< Register />} />
        <Route path="/volcanolist" element={< VolcanoList />} />
        <Route path="/volcano/:id" element={< VolcanoDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
