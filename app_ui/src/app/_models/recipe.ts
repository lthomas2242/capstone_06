export class Recipe {
    _id!: string;
    title!: string;
    meal_type!: string;
    description!: string;
    rating!: string;
    preparation_time!: string;
    image_url!: string;
    approved!: number;
    ingredients!: [Ingredients];
    directions!: [String];
    nutritions!: Nutritions;
}

export class Ingredients {
    ingredient_name!: string;
    quantity!: string;
}

export class Nutritions {
    calories!: string;
    fat!: string;
    carbs!: string;
    protein!: string;
    cholesterol!: string;
    sodium!: string;
}
