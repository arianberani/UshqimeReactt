import React, {useEffect,useState} from "react";
import Recipe from '../Recipe/Recipe';
import '../../App.css'

function AppRecipe() {

      const [recipes, setRecipes] = useState ([]);
      const [search,setSearch]= useState('');
      const app_id = "7ffefd79";
      const app_key ="efa8939506a8eea8a6d81cc60b8756af";
      const [query,setQuery] = useState ('chicken');

      useEffect( () =>{
         getRecipes();
      },[query]);

      const getRecipes = async () => {
        try {
          const url = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`
          const response = await fetch (url);
          const data = await response.json();
          setRecipes(data.hits);
          console.log(data.hits);
          
        } catch (error) {
          console.log('error while getting data from api:', error)
        }
      }

      const updateSearch =  e => {
        setSearch(e.target.value);    
      };

      const getSearch = e => {
        e.preventDefault();
        setQuery(search);
      }

      return (
        <div className="App">
              <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type = "text"  placeholder="Search for food" value ={search} onChange={updateSearch}/>
                <button  className ="search-button" type="submit"> Search</button>
              </form>
            
                  <h1 className="titelUshqim">Gej Ushqime Per Pregaditje</h1>
        
            <div className ="recipes"> 
              { recipes.length === 0 ? <h1>Loading data...</h1>
                :recipes.map ((element, index) => (
                  <Recipe 
                          key={index}
                          items={element}
                        />
              ))};
            </div>

        </div>
      );  
}
export default AppRecipe
