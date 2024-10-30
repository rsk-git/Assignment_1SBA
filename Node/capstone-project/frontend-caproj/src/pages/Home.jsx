import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../styles/HomePage.css";
import homepageGif from "../assets/7GpG.gif";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const username = localStorage.getItem('username');
    const picture = localStorage.getItem('picture');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            // Simulate checking if the recipe exists (replace this with actual search logic)
            const recipeExists = false; // Replace with actual condition based on your recipe data

            if (recipeExists) {
                navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
            } else {
                navigate('/error'); // Redirect to error page if recipe not found
            }
        }
    };

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
