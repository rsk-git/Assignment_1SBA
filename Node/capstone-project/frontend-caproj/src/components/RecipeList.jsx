import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get(import.meta.env.VITE_EDAMAM_API_URL, {
                    params: {
                        q: 'vegetable',
                        app_id: import.meta.env.VITE_EDAMAM_APP_API_ID,
                        app_key: import.meta.env.VITE_EDAMAM_APP_API_KEY,
                        from: 0,
                        to: 10,
                        health: 'vegetarian'
                    },
                });
                console.log(response.data)
                setRecipes(response.data.hits);
            } catch (err) {
                setError('Failed to load recipes from Edamam API');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="recipe-list">
            <h1>Recipe List</h1>
            <ul>
                {recipes.map(({ recipe}) => (
                    <li key={recipe.uri} style ={{border: '1px solid #ddd', padding: '10px', margin: '10px 0'}}>
                        <h2>{recipe.label}</h2>
                        {/* Display recipe image */}
                        {recipe.image && (
                            <img src = {recipe.image}
                            alt = {recipe.label}
                            style = {{ width: '100%', maxWidth: '300px', borderRadius: '8px', marginBottom: '10px'}}/>
                        )}
                        <p><strong>Ingredients:</strong> {recipe.ingredientLines.join(', ')}</p>
                        <p><strong>Instructions:</strong> {recipe.url ? <a href={recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a> : 'No instructions available'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;