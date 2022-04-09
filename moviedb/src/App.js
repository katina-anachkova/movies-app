import './App.css';
import * as util from './util.js';
import AuthCtx from './context/AuthCtx.js';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Routes, useNavigate } from 'react-router';
import { useState, useSyncExternalStore } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import { logout } from './services/Api';
import MovieDetails from './components/MovieDetails';
import CreateMovie from './components/Create';

function App() {

  const [userInfo, setUserInfo] = useState({ isAuthenticated: false, user: {} });

  const onRegister = (user) => {
    setUserInfo({ user });
  }

  const onLogin = (user) => {
    setUserInfo({ user });
  }

  const onLogout = () => {
    logout();
    util.clearUserData();
  }

  return (
    <AuthCtx.Provider value={userInfo}>
      <div id="container">
        <Header userInfo={userInfo} onLogout={onLogout} />
        <main id="site-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<CreateMovie />} />
            <Route path="/details/:id" element={<MovieDetails />} />
            <Route path='/login' element={<Login onLogin={onLogin} />} />
            <Route path='/register' element={<Register onRegister={onRegister} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthCtx.Provider>
  );
}

export default App;
