import React from 'react'
import {CardActionArea} from '@material-ui/core/'
import {CardMedia} from '@material-ui/core/'
import {Typography} from '@material-ui/core/'
import { RecipeCardContainer, RecipeCardContent } from './Styled'

export const RecipeCard = (props) => {

  return (
    <RecipeCardContainer onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          component={'img'}
          alt={props.title}
          height={'150px'}
          image={props.image}
          title={props.title}
        />
        <RecipeCardContent>
          <Typography align={'center'}>
            {props.title}
          </Typography>
        </RecipeCardContent>
      </CardActionArea>
    </RecipeCardContainer>
  )
}
