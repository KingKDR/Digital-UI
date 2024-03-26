import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employee from './pages/Employee';
import Account from './pages/Account';

function App() {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id?" element={<Register />} />
        <Route path="/data" element={<Employee />} />
        <Route path="/search" element={<Account />} />
      </Routes>
    </Router>
 );
}

export default App;
