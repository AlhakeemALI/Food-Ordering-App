import styles from "../styles/Navbar.module.css"
import Image from 'next/image'
import { ImPhone, ImCart} from "react-icons/im";
const Navbar = () => {
  return (
<div className={styles.container}>

<div className={styles.item}>
  
   <ImPhone className={styles.call} />
  
   <div className={styles.texts}>
    <div className={styles.text}>OREDER NOW!</div>
    <div className={styles.text}>333 444 5555</div>
   </div>
</div>
<div className={styles.item}>
  <ul className={styles.list}>
   <li className={styles.listItem}>HomePage</li>
   <li className={styles.listItem}>Products</li>
   <li className={styles.listItem}>Menu</li>
 
   <li className={styles.listItem}>Events</li>
   <li className={styles.listItem}>Blog</li>
   <li className={styles.listItem}>Contact</li>
  </ul>
</div>
<div className={styles.item}>
  <div className={styles.cart}>
  <ImCart className={styles.cartIcon} />
  <div className={styles.counter}>2</div>
  </div>
</div>
</div>
  )
}

export default Navbar