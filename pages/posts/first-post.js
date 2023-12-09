import Link from 'next/link';
import Avartar from './avatar';
import styles from '../../styles/FirstPost.module.css';
const array = [
    'HTML',
    'CSS',
    'JavaScript',
    'EJS',
    'Bootstrap',
    'SQL',
    'Node'
]

export default function FirstPost(){
    const skillArray = array.map((s,idx) =>{ 
        return   <div className={styles.card} key={idx}>{s}</div>
       
    })

    return(
        <div className={styles.container}>
            <h1>First Post</h1>
            <Avartar />
            <p>My engineering journey began learning HTML, CSS, JAVA, and more</p>
            <p> I learned {array[6]} for server-side rendering </p>
            <div className={styles.grid}>
                I have learned the following concepts:
                {skillArray}
            </div>
            <Link href="/">Go to Home</Link>
        </div>
    )
}