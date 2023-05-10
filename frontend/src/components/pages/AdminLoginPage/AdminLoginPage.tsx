import React from 'react';
import AdminLogin from '../../organisms/AdminLogin/AdminLogin';

type loginPageProps = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AdminLoginPage({ setIsLoggedIn }: loginPageProps) {
  return (
    <div>
      <AdminLogin setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}
