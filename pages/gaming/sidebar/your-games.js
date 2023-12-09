import Link from 'next/link';
import styles from '../../../styles/Sidebar.module.css';

export default function Yourgames (){
    return (
      <div className={styles.title}>
        <h3>Your games</h3> <Link href="/">See All</Link>
        <p>Save a game to Your games to create a shortcut for it here</p>
        <p>Save Changes</p>
        
      </div>
    )
  }