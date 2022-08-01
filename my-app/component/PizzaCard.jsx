
import Styles from "../styles/PizzaCard.module.css"
import Image from 'next/image'

const PizzaCard = () => {
  return (
    <div className={Styles.container}>
     <Image src="/img/pizza.png" alt="" width="500px" height="500px" className={Styles.img} />
     <h1 className={Styles.title}>PEPPERONI Pizza</h1>
     <span className={Styles.price}>$17.80</span>
     <p className={Styles.desc}>
Image result for pepperoni pizza ingredients
Traditional pepperoni pizza is made with pizza sauce, mozzarella cheese, and pepperoni</p>
    </div>
  )
}

export default PizzaCard