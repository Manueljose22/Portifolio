import styles from './Card.module.css'

export default function Card({title, icon, text, classIcon, subtitle, customClass}) {
  return (
    <div className={`${styles.card} ${styles[customClass]}`}>
        <h3>{title}</h3>
        <h5>{subtitle}</h5>
        <div className={styles.card_body}>
            <div className={`${styles[classIcon]}`}>{icon}</div>
            <div className={styles.body}>{text}</div>
        </div>
    </div>
  )
}
