import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Buyers from './pages/Buyers';
import Sellers from './pages/Sellers'
import NoPage from './pages/NoPage';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route index element={<Home />} />
        <Route path="buyers" element={<Buyers />} />
        <Route path="sellers" element={<Sellers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<NoPage />} />

      </Routes>
    </>

  );
}

export default App;
