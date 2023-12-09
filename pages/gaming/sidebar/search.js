import { React} from "react";
import styles from '../../../styles/Sidebar.module.css';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
    return (
      <div>
        <span className={styles.title}>Gaming</span>
        <Image src='/settings-icon.jpeg' className={styles.settings_icon} alt='settings' width='20' height='20'/>

        <div className={styles.Sidebar_right}></div>
        <div className={styles.search_input}>
                    <SearchIcon />
                    <input type="text" placeholder="Search Gaming" className={styles.search_input} />
                </div>     
        <div className={styles.sidebarLink}>
        <p>Play games</p>
        </div>
        <div className={styles.sidebarLink}>
        <p>Notifications</p>
        </div>
      </div>
    )
  }