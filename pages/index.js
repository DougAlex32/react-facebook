import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Newsfeed from './newsfeed';
import RandomUpdates from './random-updates';
import Gaming from './gaming/index';
import Nav from './nav'
import Sidebar from './gaming/sidebar';

  export default function Home() {
  const [activeMenuItem, setActiveMenuItem] = useState('Newsfeed');

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Fakebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.navBarContainer}>
        <Nav onMenuItemClick={handleMenuItemClick} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <main className={styles.main}>
          {activeMenuItem === 'Newsfeed' && (
            <>
              <h1 className={styles.title}>Newsfeed</h1>
              <Newsfeed />
            </>
          )}
          {activeMenuItem === 'RandomUpdates' && (
            <>
              <h1>Random Updates</h1>
              <RandomUpdates />
            </>
          )}
          {activeMenuItem === 'Gaming' && (
            <>
              <Gaming />
            </>
          )}
        </main>
      </div>
      
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}