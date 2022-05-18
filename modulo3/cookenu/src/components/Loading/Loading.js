import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { LoadingContainer } from './Styled'

export const Loading = () => {
  return (
    <LoadingContainer>
      <CircularProgress/>
    </LoadingContainer>
  )
}


