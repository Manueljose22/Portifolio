import Card from '../card/Card';
import styles from './Container.module.css';
 

export default function Conatiner(props){
    return(
        <section className={styles.container}>
            <h2>{props.title} <span>{props.icon}</span></h2>
            {/* <p>{props.description}</p> */}

            {props.children}
        </section>
    )
}