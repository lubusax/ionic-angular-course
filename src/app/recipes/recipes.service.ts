import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Pho Ga',
      imageUrl: 'https://steamykitchen.com/wp-content/uploads/2007/07/jaden1.jpg',
      ingredients: ['Chicken', 'Coriander', 'Ginger', 'Noodles']
    },
    {
      id: 'r2',
      title: 'Falafel',
      imageUrl: 'https://toriavey.com/images/2011/01/Falafel-10-640x480.jpg',
      ingredients: ['Chickpeas', 'Baking Soda', 'Onion', 'Parsley']
    }
  ];


  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe=> {
      return recipe.id !== recipeId;
    });
  }
}
