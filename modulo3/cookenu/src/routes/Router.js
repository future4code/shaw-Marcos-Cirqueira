import React from "react";
import { Routes, Route } from 'react-router-dom';
import {Login} from '../pages/Login/Login'
import {Signup} from '../pages/Signup/Signup'
import {RecipesList} from '../pages/RecipesList/RecipesList'
import {RecipeDetail} from '../pages/RecipeDetail/RecipeDetail'
import {AddRecipes} from '../pages/AddRecipes/AddRecipes'
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";


export const Router = ({setRightButtonText}) => {

    return (          
            <Routes>
                <Route path="/" element={<Login  setRightButtonText={setRightButtonText}/>} />
                <Route path="/signup" element={<Signup setRightButtonText={setRightButtonText}/>} />} />
                <Route path="/recipeslist" element={<RecipesList />} />
                <Route path="/recipedetail" element={<RecipeDetail />} />
                <Route path="/addrecipes" element={<AddRecipes />} />
                <Route path="*" element={<ErrorPage /> } />
            </Routes>

    )
} 


