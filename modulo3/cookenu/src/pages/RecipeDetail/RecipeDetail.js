import React from 'react'
import { useProtectedPage } from '../../hooks/useProtected'

export const RecipeDetail = () => {
  useProtectedPage()
  return (
    <div>RecipeDetail</div>
  )
}

 