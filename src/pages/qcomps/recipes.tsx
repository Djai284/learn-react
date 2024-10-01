export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

interface RecipeProps {
  recipe: {
    id: string;
    name: string;
    ingredients: Set<string>;
  };
}
function Recipe({ recipe }: RecipeProps) {
  return (
    <li>
      <h2>{recipe.name}</h2>
      <ul>
        {Array.from(recipe.ingredients).map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </li>
  );
}

export default function RecipeList() {
  const recipeItems = recipes.map(recipe => (
    <Recipe key={recipe.id} recipe={recipe} />
  ));
  return (
    <div>
      <h1>Recipes</h1>
      {recipeItems}
    </div>
  );
}