import './App.css';
import * as util from './util.js';
import AuthCtx from './context/AuthCtx.js';
import Header from './components/core/Header';
import Dashboard from './components/pages/Dashboard';
import Catalog from './components/pages/Catalog';
import { Route, Routes } from 'react-router';
import { useState } from 'react';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/core/Footer';
import { logout } from './services/Api';
import MovieDetails from './components/pages/MovieDetails';
import CreateMovie from './components/feature/Create';
import Search from './components/pages/SearchBar';
import SearchBar from './components/pages/SearchBar';
import Results from './components/pages/SearchResults';
import { List } from '@mui/material';

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
            <Route path='/' element={<SearchBar />} />
            <Route path='/' element={<List />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/dashboard' element={<Dashboard user={userInfo} />} />
            <Route path='/create' element={<CreateMovie />} />
            <Route path="/details/:id" element={<MovieDetails />} />
            {/* <Route path={`/?s=${searchQuery}`} element={<Results />} /> */}
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
