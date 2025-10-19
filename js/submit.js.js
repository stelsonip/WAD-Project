// Handle recipe submission
function submitRecipe(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    
    // Create new recipe object
    const newRecipe = {
        name: formData.get('name'),
        category: formData.get('category'),
        description: formData.get('description'),
        prepTime: parseInt(formData.get('prepTime')),
        cookTime: parseInt(formData.get('cookTime')),
        servings: parseInt(formData.get('servings')),
        ingredients: formData.get('ingredients').split('\n').filter(i => i.trim()),
        instructions: formData.get('instructions').split('\n').filter(i => i.trim()),
        submitter: formData.get('submitter'),
        email: formData.get('email')
    };
    
    // Validate that we have ingredients and instructions
    if (newRecipe.ingredients.length === 0) {
        alert('Please add at least one ingredient');
        return;
    }
    
    if (newRecipe.instructions.length === 0) {
        alert('Please add at least one instruction');
        return;
    }
    
    // Add recipe to database
    addRecipe(newRecipe);
    
    // Show success message
    alert('Recipe submitted successfully! 🎉\n\nThank you for contributing to Namibian Cuisine!');
    
    // Reset form
    event.target.reset();
    
    // Redirect to recipes page after a short delay
    setTimeout(() => {
        window.location.href = 'recipes.html';
    }, 1500);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('submitForm');
    
    form.addEventListener('submit', submitRecipe);
    
    // Add real-time validation
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        field.addEventListener('invalid', function(e) {
            e.preventDefault();
            this.classList.add('error');
        });
        
        field.addEventListener('input', function() {
            if (this.validity.valid) {
                this.classList.remove('error');
            }
        });
    });
});