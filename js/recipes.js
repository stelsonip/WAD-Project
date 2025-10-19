// Global variables
let selectedCategories = new Set();

// Toggle category filter
function toggleCategory(element) {
    const type = element.dataset.type;
    element.classList.toggle('selected');
    
    if (selectedCategories.has(type)) {
        selectedCategories.delete(type);
    } else {
        selectedCategories.add(type);
    }
    
    filterRecipes();
}

// Filter recipes
function filterRecipes() {
    const searchText = document.getElementById('searchFilter').value.toLowerCase();
    const grid = document.getElementById('recipesGrid');
    
    let filtered = recipes;
    
    // Filter by search text
    if (searchText) {
        filtered = filtered.filter(recipe => 
            recipe.name.toLowerCase().includes(searchText) ||
            recipe.description.toLowerCase().includes(searchText)
        );
    }
    
    // Filter by categories
    if (selectedCategories.size > 0) {
        filtered = filtered.filter(recipe => 
            selectedCategories.has(recipe.category)
        );
    }
    
    displayRecipes(filtered);
}

// Display recipes
function displayRecipes(recipeList) {
    const grid = document.getElementById('recipesGrid');
    
    if (recipeList.length === 0) {
        grid.innerHTML = '<div class="no-results">No recipes found with the selected criteria.</div>';
        return;
    }
    
    grid.innerHTML = recipeList.map(recipe => `
        <div class="recipe-card" onclick="openRecipeModal(${recipe.id})">
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

// Open recipe modal
function openRecipeModal(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    document.getElementById('modalRecipeName').textContent = recipe.name;
    document.getElementById('modalRecipeContent').innerHTML = `
        <div class="modal-recipe-icon">${recipe.icon}</div>
        <p style="color: var(--text); margin-bottom: 24px;">${recipe.description}</p>
        
        <div class="recipe-details">
            <div class="detail-item">
                <div class="detail-label">Prep Time</div>
                <div class="detail-value">${recipe.prepTime} min</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Cook Time</div>
                <div class="detail-value">${recipe.cookTime} min</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Servings</div>
                <div class="detail-value">${recipe.servings}</div>
            </div>
        </div>
        
        <div class="modal-section">
            <h3>Ingredients</h3>
            <ul class="ingredients-list">
                ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-section">
            <h3>Instructions</h3>
            <ol class="instructions-list">
                ${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}
            </ol>
        </div>
    `;
    
    document.getElementById('recipeModal').classList.add('active');
}

// Close modal
function closeModal() {
    document.getElementById('recipeModal').classList.remove('active');
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Display all recipes initially
    displayRecipes(recipes);
    
    // Add event listeners to category filters
    document.querySelectorAll('.category-type').forEach(element => {
        element.addEventListener('click', function() {
            toggleCategory(this);
        });
    });
    
    // Add event listener to search input
    document.getElementById('searchFilter').addEventListener('keyup', filterRecipes);
    
    // Add event listener to close button
    document.querySelector('.close-btn').addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    document.getElementById('recipeModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    // Check if there's a recipe ID in URL (from home page)
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('id');
    if (recipeId) {
        openRecipeModal(parseInt(recipeId));
    }
});
