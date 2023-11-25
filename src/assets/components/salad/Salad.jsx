import React,{useEffect, useState} from 'react'

export default function Salad() {
  
    let [recipes,setRecipes] = useState([]);

    const getRecipes = async ()=>{
        let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=salad");
        let data = await response.json();
        // console.log(data.recipes);
        setRecipes(data.recipes);
    }

    useEffect( ()=>{
        getRecipes();
    }, [])

  return (
    <div className='row'>
        {  recipes.map((ele)=>{
            return(
                <div className='col-md-4' key={ele.recipe_id}>
                    
                    <img src={ele.image_url} className='w-100'/>
                    <h2>{ele.title}</h2>
                </div>
            )

        }  )
        }

    </div>
  )
}
