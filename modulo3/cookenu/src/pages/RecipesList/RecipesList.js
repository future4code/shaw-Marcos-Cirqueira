import React from 'react'
import Button from "@material-ui/core/Button"
import { useProtectedPage } from '../../hooks/useProtected'

export const RecipesList = () => {
  useProtectedPage()
  return (
    <div>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  )
}

