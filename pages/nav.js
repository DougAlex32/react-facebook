import style from "../styles/Nav.module.css";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar,IconButton } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import Link from 'next/link';
export default function Nav(){
    return (
        <div className={style.navBar}>
            <div className={style.navBar_left}>
                <img src="/Facebook-Logos.png"/>
                <div className={style.navBar_input}>
                    <SearchIcon/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className={style.navBar_center}>
                <div className={style.navBar_center_item}>
                    <HomeIcon fontSize="large"/>
                </div>
                <div className={style.navBar_center_item}>
                    <Link href="/video/video">
                    <OndemandVideoIcon fontSize="large"/>
                    </Link>
                </div>
                <div className={style.navBar_center_item}>
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
                <div className={style.navBar_center_item}>
                    <SportsEsportsIcon fontSize="large"/>
                </div>
            </div>
            <div className={style.navBar_right}>
                <IconButton>
                <AppsIcon/>
                </IconButton>
                <IconButton>
                <MessageIcon/>
                </IconButton>
                <IconButton>
                <NotificationsActiveIcon/>
                </IconButton>
                <div className={style.navBar_info}>
                    <Avatar/>
                </div>
            </div>
        </div>
    )
}


