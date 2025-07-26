import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function LogoutButton() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Signed out");
    } catch (err) {
      console.error(err.message);
    }
  };

  return <button onClick={handleLogout}>Log Out</button>;
}
