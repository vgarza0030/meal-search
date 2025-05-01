export function setSearchedMeals(state, meals) {
    state.setsearchedMeals = meals || []
}

export function setMealsByLetter(state, meals) {
    state.mealsByLetter = meals || []
}

export function setMealsByIngredients(state, meals) {
    state.setMealsByIngredient = meals || []
}