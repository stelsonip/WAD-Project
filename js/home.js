// Display featured recipes on home page
function displayFeaturedRecipes() {
    const grid = document.getElementById('featuredRecipes');
    
    // Show first 3 recipes as featured
    const featured = recipes.slice(0, 3);
    
    grid.innerHTML = featured.map(recipe => `
        <div class="recipe-card" onclick="window.location.href='recipes.html?id=${recipe.id}'">
            <div class="recipe-image">${recipe.icon}</div>
            <div class="recipe-info">
                <h3 class="recipe-name">${recipe.name}</h3>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-meta">
                    <span class="recipe-badge">📁 ${recipe.category}</span>
                    <span class="recipe-badge">⏱️ ${recipe.prepTime + recipe.cookTime} min</span>
                    <span class="recipe-badge">🍽️ ${recipe.servings} servings</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    displayFeaturedRecipes();
});