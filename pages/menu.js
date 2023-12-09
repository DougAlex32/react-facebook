import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Menu({ username, message, onMenuItemClick }) {
    const handleMenuItemClick = (menuItem) => {
        if (onMenuItemClick) {
            onMenuItemClick(menuItem);
        }
    };

    return (
        <div className={styles.menu}>
            <h2 className={styles.menuTitle}>
                <Image src='/s-l1600.png' alt='engineer' width='20' height='20' />
                Messages
                <Image src='/exclamation.png' alt='notification' width='20' height='20' />
                Notifications
                <a href="#" onClick={() => handleMenuItemClick('Newsfeed')}>
                    Newsfeed
                </a>
                <a href="#" onClick={() => handleMenuItemClick('RandomUpdates')}>
                    Random Updates
                </a>
                <a href="#" onClick={() => handleMenuItemClick('Gaming')}>
                    Gaming
                </a>
            </h2>
        </div>
    );
}
