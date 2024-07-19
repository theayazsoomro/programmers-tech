import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        
        if (token && storedUser) {
          const userData = JSON.parse(storedUser);
          setUser(userData);
        } else if (token) {
          const response = await axios.get('http://localhost:5001/api/users', {
            headers: { Authorization: `Bearer ${token}` }
          });
          setUser(response.data); // Assuming response.data contains user info
        }
      } catch (error) {
        console.error('Error fetching user details', error);
      }
    };
  
    fetchUser();
  }, []);  

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {user ? (
        <p>Welcome, {user.name}!</p> // Display user's name
      ) : (
        <p>Loading...</p>
      )}
      <p>Manage users, courses, and content here.</p>
    </div>
  );
};

export default AdminDashboard;
