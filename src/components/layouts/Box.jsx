import styles from './Box.module.css';
 

export default function Box(props){
    return(
        <section className={styles.container}>
            {props.children}
        </section>
    )
}