import React from 'react'
import {useProtectedPage} from '../../hooks/useProtected'
import { RecipeContainer, ScreenContainer } from './Styled'
import {AddRecipesForm} from './AddRecipesForm'
import {Typography} from '@material-ui/core/'

export const AddRecipes = () => {
  useProtectedPage()
  return (
    <ScreenContainer>
      <RecipeContainer>
        <Typography gutterBottom variant={'h4'} align={'center'} color={'textPrimary'}>Adicionar Nova Receita</Typography>
        <AddRecipesForm/>
      </RecipeContainer>
    </ScreenContainer>
  )
}


