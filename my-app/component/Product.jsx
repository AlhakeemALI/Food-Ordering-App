import styles from "../styles/Product.module.css"
import Image from "next/image"
import PizzaCard from "./PizzaCard"

const Product = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Best Pizza Place in Town</h1>
      <p className={styles.desc}>Yes, this place serves other kinds of pizza you ll find New York, Italian, and Chicago-style pies on the menu</p>
      <div className={styles.wrapper}>
       <PizzaCard/>
       <PizzaCard/>
       <PizzaCard/>
       <PizzaCard/>
       <PizzaCard/>
       <PizzaCard/>
       <PizzaCard/>
       <PizzaCard/>
      </div>
      </div>
  )
}

export default Product