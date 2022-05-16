import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Login} from '../pages/Login/Login'
import {Signup} from '../pages/Signup/Signup'
import {RecipesList} from '../pages/RecipesList/RecipesList'
import {RecipeDetail} from '../pages/RecipeDetail/RecipeDetail'
import {AddRecipes} from '../pages/AddRecipes/AddRecipes'



export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/recipeslist" element={<RecipesList />} />
                <Route path="/recipedetail" element={<RecipeDetail />} />
                <Route path="/addrecipes" element={<AddRecipes />} />
            </Routes>
        </BrowserRouter>

    )
} 