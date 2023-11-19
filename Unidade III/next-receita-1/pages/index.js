import { HomeImage } from "./image";
import { HomeDescription } from "./description";
import { YouTubeBackground } from "./video";
import styles from "./styles/index.module.css";

export default function Main(){
    return (
       <div className={styles.homePage}>  
         <YouTubeBackground />
            <div className={styles.leftDiv}>
               <HomeImage />
               <HomeDescription />
            </div>
       </div>
    )
 }