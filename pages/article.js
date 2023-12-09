import styles from '../styles/Home.module.css';

export default function Article({ title, body, idx }) {
    return (
        <div className={styles.card} key={idx}>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}