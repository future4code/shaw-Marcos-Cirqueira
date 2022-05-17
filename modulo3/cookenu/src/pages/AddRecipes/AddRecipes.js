import React from 'react'
import { useProtectedPage } from '../../hooks/useProtected'

export const AddRecipes = () => {
  useProtectedPage()
  return (
    <div>
      
    <h2>Adicionar</h2>
    </div>
  )
}
