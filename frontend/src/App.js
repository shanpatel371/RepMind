import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import Signup from './auth/Signup';
import Login from './auth/Login';
import LogoutButton from './auth/LogoutButton';
import { getAuthHeader } from './utility/authHeader';

async function testToken() {
  try {
    const headers = await getAuthHeader();
    console.log("Firebase user token:", headers.Authorization);
  } catch (err) {
    console.error("Error getting token:", err);
  }
}

function App() {
  useEffect(() => {
    testToken();
  }, []);

  return (
    <div>
      <h1>Workout Tracker</h1>
      <Signup />
      <Login />
      <LogoutButton />
    </div>
  );
}

export default App;
