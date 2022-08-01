import styles from "../styles/Featured.module.css"
import Image from "next/image";
import {ImArrowRight2,ImArrowLeft2 } from "react-icons/im";
import { useState } from "react";
const Featured = () => {
    
  const [index, setIndex] = useState(0)
  const images = [
    "/img/piz-1.jpg",
    "/img/piz-2.jpg",
    "/img/piz-3.jpg"
  ]

  const handeArrow = (direction) => {
    if (direction  === "l") {
       setIndex(index !== 0 ? index - 1 : 2)
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0)
    }
  }
   console.log(index)

  return (
    <div className={styles.container} style={{left:0}}>
      
     <div className={styles.arrowCotainer} >
       <ImArrowLeft2 className={styles.arrow} onClick={() => handeArrow("l")}/>
      </div>
      
        <div className={styles.wrapper} style={{transform: `translateX(${-100 * index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgCotainer}  key={i}>
              
          
                <Image src={img}  alt="" layout="fill" objectFit="contain"
                />
              
             
          </div>
          ))}
        </div>
        <div className={styles.arrowCotainerr} >
        <ImArrowRight2 className={styles.arrow} style={{right:0}} onClick={() => handeArrow("r")}  />
        </div>
      
    </div>
  )
}

export default Featured