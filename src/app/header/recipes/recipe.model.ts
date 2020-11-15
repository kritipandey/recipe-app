import { Ingredient } from 'src/app/shared/ingredient.model';

export class Recipe{
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredients: Ingredient[];

    constructor(name:string, desc:string, imagePath:string, ingredients: Ingredient[] ){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}




// A model is just a blueprint for objects we create and ts does the same by defining how a recipe should look like.