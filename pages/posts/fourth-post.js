import Link from 'next/link';
import Avartar from './avatar';
import styles from '../../styles/FourthPost.module.css';
const reactArray = [
    { topic: 'Bag', description: 'The amount of money you will get per project'},
    { topic: 'Drip', description: 'The type of clothing or jewlery you will be rocking'},
    { topic: 'Net worth', description: 'The amount of  Bag + Drip'},
]

export default function FourthPost(){
    const reactArrayDisplay = reactArray.map((obj, idx)=>{
        return(
            <div className={styles.card} key={idx}>
                <h3>Topic :{obj.topic}</h3>
                <p>Description:{obj.description}</p>
            </div>
        )
    })
    return(
        <div className={styles.container}>
            <h1>Fourth Post</h1>
            <Avartar />
            <p>WE WILL BE BALLING</p>
        
         <div className={styles.grid}>
            {reactArrayDisplay}
         </div>
            <Link href="/">Go to Home</Link>
        </div>
    )
}