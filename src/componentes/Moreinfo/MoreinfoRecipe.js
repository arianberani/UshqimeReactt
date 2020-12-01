import React from 'react'
import './moreinfo.css'

function MoreinfoRecipe (props) {
	
	return(
		<div>
			<div className = "recipe morerecipe ">	
				
				<h1 className="title">{props.location.state.name.recipe.label}</h1>
				<img src ={props.location.state.name.recipe.image} alt =""/>	
			
				<ol className ="moreinfo-ol">
					{props.location.state.name.recipe.ingredientLines.map(ingredientLines => (
						<li>{ingredientLines}</li>
					))}
				</ol>
				
				<a href={props.location.state.name.recipe.url} className="videolink">Kliko per te shikuar videon e pergaditjes </a>
			</div>
		</div>
	)
}

export default MoreinfoRecipe;

// {calories2,title,image}