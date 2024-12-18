
import styles from "./fooditem.module.css"

export default function Fooditem({food,setFoodid}){


    return <div className={styles.itemcontainer}>
<img  className={styles.itemimage}   src={food.image} alt="" />

<div className={styles.itemcontent}>

<p className={styles.itemname}>{food.title}</p>
</div>



<div className={styles.buttoncontainer}>    <button   onClick={()=>{console.log(food.Id); setFoodid(food.id)}} className={styles.itemButton}> view Recipe</button>      </div>

    </div>
}