import { React} from "react";
import Search from './/sidebar/search';
import Yourgames from './/sidebar/your-games';
import Categories from './/sidebar/categories';
import styles from '../../styles/Sidebar.module.css';

    export default function Sidebar() {
        return (
            <div className={styles.sidebar}>
                <Search/>
                <Yourgames/>
                <Categories/>
                </div>
        )
}