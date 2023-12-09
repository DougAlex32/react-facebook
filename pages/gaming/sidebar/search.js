import { React} from "react";
import styles from '../../../styles/Sidebar.module.css';
import Image from 'next/image';

export default function Search() {
    return (
      <div className={styles.title}>
        <h2>Gaming</h2>
        <div className={styles.Sidebar_right}></div>
        <Image src='/settings-icon.jpeg' alt='settings' width='20' height='20'/>
        <input placeholder="Search gaming"/>
        <p>Play games</p>
        <p>Notifications</p>
      </div>
    )
  }