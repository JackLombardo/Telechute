import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Ensure jwt-decode is correctly imported

function Dashboard() {
  const [org, setOrgDataString] = useState(''); // State to hold the fetched string
  const [user, setUser] = useState(null); // State to hold the user information
  const [userData, setUserData] = useState(null); // State to hold the user information
  const navigate = useNavigate();
  const test = "testttttttttttt"; // Example test string

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signin');
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken); // Log the decoded token to check its structure

      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        // Token expired
        localStorage.removeItem('token');
        navigate('/signin');
        return;
      }
      // Set user information from the decoded token
      setUser(decodedToken);
     console.log('decodedToken', decodedToken)
    } catch (error) {
      // Invalid token
      localStorage.removeItem('token');
      navigate('/signin');
    }
  }, [navigate]);

  useEffect(() => {
    if (user) {
      // Fetch the string from the backend
      const fetchData = async () => {
        try {
          const response = await fetch('/api/getUser/' + user._id); // Replace with your API endpoint
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const userData = await response.json();
          console.log("user", userData);
          setUserData(userData); // Adjust based on your API response structure
        } catch (error) {
          console.error('Fetch error:', error);
        }
      };

      fetchData();
    }
  }, [user]);


  useEffect(() => {
    // Fetch the string from the backend
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getOrg/' + userData.orgId); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const orgData = await response.json();
        console.log(orgData);
        setOrgDataString(orgData); // Adjust based on your API response structure
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, [org]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="h-screen bg-gray-800 text-white w-64 flex flex-col">
        <div className="p-4 text-center font-bold text-xl border-b border-gray-700">
          {org.orgName}
          {/* Display user information */}
          {user && <p className="text-sm">{`Welcome, ${userData ? userData.firstName : 'User'}`}</p>}
        </div>
        <nav className="flex flex-col p-4">
          <Link to="/dashboard" className="mb-2 p-2 rounded hover:bg-gray-700 transition duration-300">
            Dashboard
          </Link>
          <Link to="/profile" className="mb-2 p-2 rounded hover:bg-gray-700 transition duration-300">
            Profile
          </Link>
          <Link to="/settings" className="mb-2 p-2 rounded hover:bg-gray-700 transition duration-300">
            Settings
          </Link>
          <button
            onClick={handleLogout}
            className="mt-auto p-2 rounded bg-red-600 hover:bg-red-700 transition duration-300"
          >
            Logout
          </button>
        </nav>
      </div>

      {/* Main Dashboard Content */}
      <div className="flex-1 bg-gray-900 text-gray-100 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl p-8 bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
          >
            Logout
          </button>
          {/* Display the fetched data */}
          <div className="mt-6 text-center text-lg">
            <p>{org.adminEmail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
