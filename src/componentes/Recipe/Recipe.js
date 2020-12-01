import React from 'react'
import './Recipe.css'
import { Link } from 'react-router-dom';


 function Recipe(props) {

	const{items}=props
	console.log("asdad", props.items)

    return (
		<div className = "recipe">	
		    <h1 className="title">{items.recipe.label}</h1>
			
			<Link to={{
				pathname:"info/1",
				state: {'name': props.items}
				  }}>
				<img src ={items.recipe.image} alt =""/>
			</Link>
			
			<ol>
				{items.recipe.ingredients.map(ingredient => (
					<li>{ingredient.text}</li>		
				))}
			</ol>
			
			<p> Kalorit e ushqimit {items.recipe.calories.toFixed(1)}:C</p>
		</div>	
	
    )
}
export default Recipe