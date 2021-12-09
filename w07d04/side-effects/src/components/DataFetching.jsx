import axios from 'axios';
import {useEffect, useState} from 'react';

const DataFetching = () => {
  const [recipes, setRecipes] = useState([
    { id: 4, title: 'ramen chili', ingredients: [] }
  ]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const baseUrl = 'https://my-json-server.typicode.com/andydlindsay/chef-andy';

    const recipePromise = axios.get(`${baseUrl}/recipes`);
    const ingredientPromise = axios.get(`${baseUrl}/ingredients`);

    const promises = [recipePromise, ingredientPromise];

    Promise.all(promises)
      .then((arrOfResults) => {
        const newRecipes = arrOfResults[0].data;
        const newIngredients = arrOfResults[1].data;

        setRecipes(newRecipes);
        setIngredients(newIngredients);
      });
  }, []);

  return (
    <div>
      <h2>Data Fetching</h2>

      { recipes.map((recipe) => {
        return <p key={recipe.id}>{recipe.title} ({recipe.id})</p>
      }) }

      <h2>Num ingredients: {ingredients.length}</h2>
    </div>
  )
};

export default DataFetching;
