import styles from './Footer.module.css';

export default function Footer() {

    const year = new Date().getFullYear();

    return(
        <footer className={styles.footer}>
            <p>Manuel José &copy; <span>{year}</span></p>
        </footer>
    )
}