import { Router } from 'express';
import { createRecipe, getAllRecipe, getRecipeById, updateRecipe, deleteRecipe } from '../controllers/recipeController.js';

const router = Router();

router.post('/', createRecipe);
router.get('/', getAllRecipe);
router.get('/:id', getRecipeById);
router.put('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);


export default router;