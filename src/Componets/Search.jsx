import { useEffect, useState } from "react"
import styles from './search.module.css'


const URL="https://api.spoonacular.com/recipes/complexSearch";
const API_KEY="bb919deae4c443d7b8637864b17145fa";






export default function Search({foodData,setfoodData}){




    const [query,setquery]=useState([]);


//     useEffect(()=>{
//         function demo(){


//             console.log("demo function is executed")
//         }
// demo()

//     },[query])

useEffect(()=>{

   async  function fetchdata(){

const res=await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)

const data=await res.json();
console.log(data.results);
setfoodData(data.results)

}
fetchdata()

},[query])


return <div   className={styles.searchcontainer}>

<input  className={styles.input} type="text" onChange={(e)=>setquery(e.target.value)} value={query}/>


</div>


}