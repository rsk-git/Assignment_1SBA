import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('search') || '';

    const recipesPerPage = 10;

    const fetchRecipes = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`http://localhost:3000/api/recipes`, {
                params: {
                    page: currentPage,
                    limit: recipesPerPage,
                    search: searchTerm
                },
            });
            setRecipes(response.data.recipes);
            setTotalPages(Math.ceil(response.data.totalCount / recipesPerPage));
        } catch (err) {
            setError('Failed to load recipes');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, [currentPage, searchTerm]);

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="recipe-list">
            <h1>Recipe List</h1>
            <ul>
                {recipes.map(({ recipe }) => (
                    <li key={recipe._id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
                        <h2>{recipe.label}</h2>
                        {recipe.image && (
                            <img
                                src={recipe.image}
                                alt={recipe.label}
                                style={{ width: '100%', maxWidth: '300px', borderRadius: '8px', marginBottom: '10px' }}
                            />
                        )}
                        <p><strong>Ingredients:</strong> {recipe.ingredientLines.join(', ')}</p>
                        <p><strong>Instructions:</strong> {recipe.url ? <a href={recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a> : 'No instructions available'}</p>
                    </li>
                ))}
            </ul>
            <div className="pagination-controls">
                {currentPage > 1 && (
                    <button onClick={goToPreviousPage}>Previous</button>
                )}
                {currentPage < totalPages && (
                    <button onClick={goToNextPage}>Next</button>
                )}
            </div>
        </div>
    );
};

export default RecipeList;
