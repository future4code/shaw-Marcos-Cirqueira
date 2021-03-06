import React from 'react'
import { CircularProgress } from '@material-ui/core';
import {ContainerLoading} from '../Loading/LoadingStyle'


export const Loading = () => {
  return (
    <ContainerLoading>
        <CircularProgress />
    </ContainerLoading>
  )
}

