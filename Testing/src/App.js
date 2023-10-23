/* eslint-disable react/prop-types */
import React from 'react';
import { recipes } from './data.js';
import { Fragment } from 'react';

export default function RecipeList() {

    const recipeList = recipes.map((recipe) => {
        return (
            <Fragment key={recipe.id}>
                <h2>{recipe.name}</h2>
                <ul>
                    {recipe.ingredients.map(ing => {
                        return (
                            <li key={`${recipe.id}_${ing}`}>{ing}</li>
                        )
                    })}
                </ul>
            </Fragment>
        )
    })

    return (
        <div>
            <h1>Recipes</h1>
            {recipeList}
        </div>
    );
}
