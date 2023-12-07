import styles from './Card.module.css'

export default function Card({title, icon, text, classIcon, subtitle}) {
  return (
    <div className={styles.card}>
        <h3>{title}</h3>
        <div className={styles.card_body}>
            <div className={`${styles[classIcon]}`}>{icon}</div>
            <div className={styles.body}>{text}</div>
        </div>
    </div>
  )
}
