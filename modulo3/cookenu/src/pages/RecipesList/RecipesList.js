import React from "react"
import {RecipeCard} from "../../components/RecipeCard/RecipeCard"
import {useProtectedPage} from '../../hooks/useProtected'
import { RecipeListContainer, AddRecipeButton } from './Styled'
import {useRequestData} from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { Add } from '@material-ui/icons'
import { useNavigate } from 'react-router-dom'
import { goToAddRecipes, goToRecipeDetail } from '../../routes/coordinator'
import {Loading} from "../../components/Loading/Loading"

export const RecipesList = () => {
  useProtectedPage()
  const navigate = useNavigate()
  const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)

  const onClickCard = (id) => {
    goToRecipeDetail(navigate, id)
  }

  const recipeCards = recipes.map((recipe) => {
    return (
      <RecipeCard
        key={recipe.recipe_id}
        title={recipe.title}
        image={recipe.image}
        onClick={() => onClickCard(recipe.recipe_id)}
      />
    )
  })

  return (
    <RecipeListContainer>
      {recipeCards.length > 0 ? recipeCards : <Loading />}
      <AddRecipeButton
        color={"primary"}
        onClick={() => goToAddRecipes(navigate)}
      >
        <Add />
      </AddRecipeButton>
    </RecipeListContainer>
  )
}


