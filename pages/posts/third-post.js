import Link from 'next/link';
import Avartar from './avatar';
import styles from '../../styles/ThirdPost.module.css';
const array = [
    'Big data systems',
    'MapReduce applications',
    'News site forums',
    'Social networking applications',
    'Cloud computing',
    'Processing big data',
    'Designing modern applications',
]

export default function ThirdPost() {
    const usesArray = array.map((s,idx) =>{ 
        return <p className={styles.card} key={idx}>{s}</p>
    })

    return(
        <div className={styles.container}>
            <h1>Third Post</h1>
            <Avartar />
            <p>ready to lean new thing about MangoDB</p>
            <div className={styles.grid}>
                {usesArray}
            </div>
            <Link href="/">Go to Home</Link>
        </div>
    )
}
