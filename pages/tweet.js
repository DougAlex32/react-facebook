import styles from '../styles/Home.module.css'

export default function Tweet({ username, tweet }, idx) {
    return (
        <div className={styles.tweet} key={idx}>
        <div className={styles.tweetContent}>
          <div className={styles.tweetHeader}>
            <h3>@{username}</h3>
          </div>
          <p className={styles.tweetText}>{tweet}</p>
        </div>
      </div>
    )
}