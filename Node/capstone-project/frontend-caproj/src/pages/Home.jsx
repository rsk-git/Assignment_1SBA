import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../styles/HomePage.css";
import homepageGif from "../assets/7GpG.gif";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
// getting user details from the local storage
    const username = localStorage.getItem('username');
    const picture = localStorage.getItem('picture');
// update searchTerm as user fills the input field.
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
// search form submission handling
    const handleSearchSubmit = (e) => {
        e.preventDefault();
         if(searchTerm.trim()){
            // navigate to the recipelist page with search query
            navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
        } 
         };
       
                
// logout the user by removing their info from local storage
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('picture');
        navigate('/login');
    };

    return (
        <main>
            <h1>Welcome to the Recipe Search App</h1>
            <p>Your one-stop solution for discovering, creating, and saving your favorite recipes!</p>
            {username ? (
                <div>
                    <h2>Welcome back, {username}!</h2>
                    {picture && <img src={picture} alt="User" style={{ width: '50px', borderRadius: '50%' }} />}
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>Please <Link to="/login">Login</Link> or <Link to="/register">Register</Link> to save your favorite recipes.</p>
            )}
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search for recipes..."
                />
                <button type="submit">Search</button>
            </form>
            <img src={homepageGif} alt="Animated GIF" className="homepage-gif" />
        </main>
    );
};

export default Home;
