import React, {useState} from 'react'
import {TextField} from '@material-ui/core/'
import {Button} from '@material-ui/core/'
import { InputsContainer, AddRecipeFormContainer } from './Styled'
import {useForm} from '../../hooks/useForm'
import {createRecipe} from "../../services/recipe"
import {CircularProgress} from '@material-ui/core/'

export const AddRecipesForm = () => {
  const {form, onChange, cleanFields} = useForm({ title: "", description: "", image: "" })
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
    createRecipe(form, cleanFields, setIsLoading)
  }

  return (
    <form onSubmit={onSubmitForm}>
      <AddRecipeFormContainer>
        <InputsContainer>
          <TextField
            name={"title"}
            value={form.title}
            onChange={onChange}
            label={'Título'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField
            name={"description"}
            value={form.description}
            onChange={onChange}
            label={'Descrição'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            name={"image"}
            value={form.image}
            onChange={onChange}
            label={'Foto'}
            variant={'outlined'}
            fullWidth
            required
            margin={'normal'}
          />
        </InputsContainer>
        <Button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
        >
          {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Adicionar Receita</>}
        </Button>
      </AddRecipeFormContainer>
    </form>
  )
}

