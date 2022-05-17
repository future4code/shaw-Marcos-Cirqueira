export const goToLogin = (navigate) => {
    navigate("/")
}
export const goToSignup = (navigate) => {
    navigate("/signup")
}
export const goToAddRecipes = (navigate) => {
    navigate("/addrecipes")
}
export const goToRecipeDetail = (navigate, id) => {
    navigate(`/recipedetail/${id}`)
}
export const goToRecipesList = (navigate) => {
    navigate("/recipeslist")
}
