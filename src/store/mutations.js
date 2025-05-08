export function setSearchedMeals(state, meals) {
    state.setsearchedMeals = meals || []
}

export function setMealsByLetter(state, meals) {
    state.mealsByLetter = meals || []
}

export function setMealsByIngredient(state, meals) {
    state.setMealsByIngredient = meals || []
}