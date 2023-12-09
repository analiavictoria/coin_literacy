import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../api/api';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);
  
  async function handleLogin( email, password ) {
    const userCredentials = { email, password };
    const response = await api.post('/login',userCredentials);
    const token = response.data.token;
    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
    navigate('/dashboard');
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
  }
  
  return { authenticated, loading, handleLogin, handleLogout };
}