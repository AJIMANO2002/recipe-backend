import Recipe from '../models/Recipe.js';

export async function createRecipe(req, res) {
    try {
        const recipe = new Recipe(req.body);
        await recipe.save();
        res.status(201).json(recipe);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export async function getAllRecipe(req, res) {
    try {
        const recipes = await Recipe.find();  // Corrected
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function getRecipeById(req, res) {
    try {
        const recipe = await Recipe.findById(req.params.id);  // Corrected
        if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
        res.json(recipe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function updateRecipe(req, res) {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });  // Corrected
        if (!updatedRecipe) return res.status(404).json({ message: 'Recipe not found' });
        res.json(updatedRecipe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function deleteRecipe(req, res) {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);  // Corrected
        if (!deletedRecipe) return res.status(404).json({ message: 'Recipe not found' });
        res.json({ message: 'Recipe deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
