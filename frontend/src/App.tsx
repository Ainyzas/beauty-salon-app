import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/organisms/Header/Header';
import AdminLogin from './components/organisms/AdminLogin/AdminLogin';
import BadPathPage from './components/pages/BadPathPage/BadPathPage';
import UserRegistrationPage from './components/pages/UserRegistrationPage/UserRegistrationPage';
import UserViewPage from './components/pages/UserViewPage/UserViewPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    localStorage.getItem('loggedIn') === 'true',
  );

  useEffect(() => {
    if (isLoggedIn === true) {
      localStorage.setItem('loggedIn', 'true');
    } else {
      localStorage.setItem('loggedIn', 'false');
    }
  }, [isLoggedIn]);

  return (
    <div>
      {isLoggedIn && <Header />}
      <Routes>
        {!isLoggedIn && <Route path="/" element={<AdminLogin setIsLoggedIn={setIsLoggedIn} />} />}

        {isLoggedIn && (
          <>
            <Route path="/" element={<UserViewPage />} />
            <Route path="/register" element={<UserRegistrationPage />} />
          </>
        )}

        <Route path="*" element={<BadPathPage />} />
      </Routes>
    </div>
  );
}

export default App;
