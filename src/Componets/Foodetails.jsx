import { useEffect, useState } from "react";

export default function Foodetails({foodId}){



    const [food,setfood]=useState({})

const url=`https://api.spoonacular.com/recipes/${foodId}/information`;
const API_KEY="bb919deae4c443d7b8637864b17145fa";


useEffect(()=>{

   async function fetchfood(){

       const res=  await fetch(`${url}?apiKey=${API_KEY}`);
     const data= await res.json();
     console.log(data);
     setfood(data)
     
    }
    fetchfood();
},[foodId,url])
return <div> 
    <div>
        <h1>  {food.title} </h1>

   
<img src={food.image} alt="" />

    </div>
    
    <div>
    
    <span>    
        
        <strong>
       ⏱ {food.readyInMinutes} minutes </strong>
        
        
            </span>

            <span> 🤼serves {food.servings}      </span>
            <span>{food.vegetarian ?" 🥕vegetarian":"🍗 non-vegeterian"}</span>
            <span> {food.vegan ? "🐮vegan":""} </span>


            </div>
{/*     
    food details {foodId} */}


<div>


<span> 💲{food. pricePerServing/100}perserving
</span>
</div>








</div>

    
}