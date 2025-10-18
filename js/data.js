const recipes = [
    {
        id: 1,
        name: "Kapana",
        category: "Main Dish",
        description: "Popular Namibian street food featuring grilled beef served with spicy tomato relish.",
        icon: "🥩",
        prepTime: 15,
        cookTime: 20,
        servings: 4,
        ingredients: [
            "1kg beef (rump or sirloin), cut into chunks",
            "2 onions, finely chopped",
            "3 tomatoes, diced",
            "2 green chilies, chopped",
            "Salt and pepper to taste",
            "Oil for grilling"
        ],
        instructions: [
            "Heat a flat grill or heavy pan over high heat",
            "Season beef chunks generously with salt and pepper",
            "Grill the beef pieces until cooked to your preference, turning occasionally",
            "Meanwhile, mix onions, tomatoes, and chilies to make the relish",
            "Serve hot beef with the fresh relish on the side"
        ],
        instructions: [
            "Heat a flat grill or heavy pan over high heat",
            "Season beef chunks generously with salt and pepper",
            "Grill the beef pieces until cooked to your preference, turning occasionally",
            "Meanwhile, mix onions, tomatoes, and chilies to make the relish",
            "Serve hot beef with the fresh relish on the side"
        ]
    },
    {
        id: 2,
        name: "Mopane Worms",
        category: "Snack",
        description: "Traditional protein-rich snack made from dried mopane caterpillars.",
        icon: "🐛",
        prepTime: 10,
        cookTime: 15,
        servings: 4,
        ingredients: [
            "200g dried mopane worms",
            "2 onions, sliced",
            "2 tomatoes, chopped",
            "Oil for frying",
            "Salt to taste",
            "Chili powder (optional)"
        ],
        instructions: [
            "Soak dried mopane worms in warm water for 30 minutes, then drain",
            "Heat oil in a pan over medium heat",
            "Add onions and sauté until translucent",
            "Add mopane worms and fry until crispy",
            "Add tomatoes and season with salt and chili powder",
            "Cook for 5 more minutes and serve hot"
        ]
    },
    {
        id: 3,
        name: "Potjiekos",
        category: "Main Dish",
        description: "Traditional stew cooked slowly in a cast iron pot over coals.",
        icon: "🍲",
        prepTime: 30,
        cookTime: 180,
        servings: 8,
        ingredients: [
            "1.5kg beef or lamb, cubed",
            "4 potatoes, quartered",
            "2 carrots, sliced",
            "2 onions, chopped",
            "1 can tomatoes",
            "2 cups beef stock",
            "Vegetables of choice",
            "Salt, pepper, and herbs to taste"
        ],
        instructions: [
            "Brown meat in the pot with a little oil",
            "Add onions and cook until soft",
            "Add tomatoes and stock",
            "Layer vegetables on top (don't stir)",
            "Cover and simmer over coals for 3 hours",
            "Season and serve with pap or rice"
        ]
    },
    {
        id: 4,
        name: "Oshifima (Pap)",
        category: "Main Dish",
        description: "Staple maize porridge served with most Namibian meals.",
        icon: "🌽",
        prepTime: 5,
        cookTime: 20,
        servings: 6,
        ingredients: [
            "4 cups maize meal",
            "6 cups water",
            "1 tsp salt"
        ],
        instructions: [
            "Bring water to a boil in a large pot",
            "Add salt to the boiling water",
            "Slowly add maize meal while stirring continuously",
            "Reduce heat and cook for 15-20 minutes",
            "Stir occasionally until thick and cooked through",
            "Serve hot with stew or meat"
        ]
    },
    {
        id: 5,
        name: "Vetkoek",
        category: "Snack",
        description: "Deep-fried dough bread, crispy outside and soft inside.",
        icon: "🍩",
        prepTime: 60,
        cookTime: 20,
        servings: 12,
        ingredients: [
            "4 cups flour",
            "1 packet instant yeast",
            "2 tbsp sugar",
            "1 tsp salt",
            "2 cups warm water",
            "Oil for deep frying"
        ],
        instructions: [
            "Mix flour, yeast, sugar, and salt in a large bowl",
            "Add warm water and knead into a soft dough",
            "Cover and let rise in a warm place for 45 minutes",
            "Heat oil in a deep pan to 180°C",
            "Shape dough into balls and flatten slightly",
            "Deep fry until golden brown on both sides, about 3-4 minutes per side",
            "Drain on paper towels and serve warm"
        ]
    },
    {
        id: 6,
        name: "Ombidi (Spinach)",
        category: "Appetizer",
        description: "Traditional wild spinach dish cooked with peanut butter.",
        icon: "🥬",
        prepTime: 10,
        cookTime: 25,
        servings: 4,
        ingredients: [
            "500g fresh spinach or ombidi leaves",
            "2 onions, chopped",
            "3 tbsp peanut butter",
            "2 tomatoes, diced",
            "Salt to taste",
            "2 tbsp oil",
            "1/2 cup water"
        ],
        instructions: [
            "Wash and roughly chop the spinach",
            "Heat oil in a large pot and sauté onions until soft",
            "Add tomatoes and cook for 5 minutes until soft",
            "Add spinach and cook until wilted, about 5 minutes",
            "Mix peanut butter with water and stir into the spinach",
            "Simmer for 15 minutes, stirring occasionally",
            "Season with salt and serve hot with pap"
        ]
    }

];

// Helper function to get category icon
function getCategoryIcon(category) {
    const icons = {
        'Main Dish': '🍖',
        'Appetizer': '🥗',
        'Snack': '🍿',
        'Dessert': '🍰',
        'Beverage': '🥤',
        'Soup': '🍲'
    };
    return icons[category] || '🍽️';
}

// function to save recipes to local storage
function saveRecipes() {
    // This would connect to a backend API in production
    console.log('Recipes saved:', recipes);
}

// function to add a new recipe
function addRecipe(recipe) {    
    const newRecipe = {
        ...recipe,
        id: recipes.length + 1,
        icon: getCategoryIcon(recipe.category)
    };
    recipes.push(newRecipe);
    saveRecipes();
    return newRecipe;
}