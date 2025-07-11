import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem('user')) || null;
  });
const [activity, setActivity] = useState(() => {
  const stored = localStorage.getItem('activity');
  return stored ? JSON.parse(stored) : [];
});
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const getUserActivity = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user || !user.email) return [];
  const key = `activity_${user.email}`;
  return JSON.parse(localStorage.getItem(key)) || [];
};


  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

const recordActivity = (type, title, image) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user || !user.email) return;

  const key = `activity_${user.email}`;
  const prev = JSON.parse(localStorage.getItem(key)) || [];

  const newActivity = {
    type,
    title,
    image,
    timestamp: new Date().toISOString(),
  };

  const updated = [...prev, newActivity];
  localStorage.setItem(key, JSON.stringify(updated));
};



useEffect(() => {
  localStorage.setItem('activity', JSON.stringify(activity));
}, [activity]);

  return (
    
    <AuthContext.Provider value={{ user, login, logout, recordActivity, activity,getUserActivity }}>
      {children}
    </AuthContext.Provider>

  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;