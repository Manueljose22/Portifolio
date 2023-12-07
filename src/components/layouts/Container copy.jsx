import Card from '../card/Card';
import styles from './Container.module.css';
 

export default function Conatiner({title, description, icon}){
    return(
        <section className={styles.container}>
            <h2>{title} {icon}</h2>
            <p>{description}</p>
           
            <Card 
                title={'Desenvolvedor Front-End Web'}

                text={'Trabalhei meio período remotamente como freelancer, para algumas empresas inciantes nos últimos anos, criando soluções, interfaces de usuário. Trabalhei com uma variedade de técnologias, incluíndo HTML 5, CSS 3, JavaScript e muito mais.'}

            />

        </section>
    )
}