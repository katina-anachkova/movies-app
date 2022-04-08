import './App.css';
import * as util from './util.js';
import AuthCtx from './context/AuthCtx.js';
import Header from './components/Header';
import Home from './components/Home';
import { Route,Routes } from 'react-router';
import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';

function App() {
  const [userInfo, setUserInfo] = useState({ isAuthenticated: false, user: {} });

  const onRegister = (user) => {
    setUserInfo({ user });
  }

  const onLogin = (user) => {
    setUserInfo({ user });
  }

  const onLogout = () => {
    util.clearUserData();
  }

  return (
    <AuthCtx.Provider value={userInfo}>
      <div id="container">
        <Header userInfo={userInfo} />
        <main id="site-content">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login onLogin={onLogin}/>}/>
            <Route path='/register' element={<Register onRegister={onRegister}/>}/>
            {/* <Route path='/logout' element={<L/>}/> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthCtx.Provider>
  );
}

export default App;
