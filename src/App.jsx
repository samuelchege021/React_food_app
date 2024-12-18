import { useState } from "react"
import Search from "./Componets/Search"
import Foodlist from "./Componets/Foodlist"
import Nav from "./Componets/Nav"
import "./App.css"
import Container from "./Componets/Container"
import Innercontainer from "./Componets/Innercontainer"
import Foodetails from "./Componets/Foodetails"

function App() {
  

  const [foodData,setfoodData]=useState([]);
  const [foodId,setFoodid]=useState("");

  return (
    <div className="App">
      <Nav/>

      <Search foodData={foodData} setfoodData={setfoodData}/>


<Container>
<Innercontainer>


     
<Foodlist setFoodid={setFoodid} foodData={foodData}/>

</Innercontainer>

    



<Innercontainer>

<Foodetails  foodId={foodId}/>



</Innercontainer>


</Container>
   
    </div>
  )
}

export default App
