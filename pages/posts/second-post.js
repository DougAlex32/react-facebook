import Link from 'next/link';
import Avartar from './avatar';
import styles from '../../styles/SecondPost.module.css';
const reactArray = [
    { topic: 'components', description: 'components are used to build React App'},
    { topic: 'props', description: 'props are used to pass data down to other components'},
    { topic: 'link tag', description: 'link tag is a next tag used to navigate React App'},
]

export default function SecondPost(){
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
            <h1>Second Post</h1>
            <Avartar />
            <p>React is a front-end frame work that allows us to make component and more.</p>
        
         <div className={styles.grid}>
            {reactArrayDisplay}
         </div>
            <Link href="/">Go to Home</Link>
        </div>
    )
}