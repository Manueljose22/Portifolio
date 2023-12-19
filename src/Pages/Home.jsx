import styles from './Home.module.css';
import {FaGithub,FaEnvelope, FaFile, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import cv from '../assets/doc/Curriculum-Mauel-jose.jpg'

export default function Home() {
  return (
    <section className={styles.description}>
        <h1>Manuel José</h1>
        <p>
            Sou desenvolvedor de software, utilizando minhas habilidades para progredir em grandes projectos criando soluções programaticas.   
        </p>
        <p>
            Pronto a abraçar novos desafios, participar em projectos visionarios e enovadores em um ambiete corporativo. Com intuito de colocar em prática todos os meus conhecimentos.
        </p>

        <div className={styles.list_social}>
            <ul>
                <li title='Github'><a href="https://github.com/ManuelJose22" target="_blank"><FaGithub /></a></li>
                <li title='Email'><a href="mailto:manuelleonel73@outlook.com"><FaEnvelope /></a></li>
                <li title='Curriculum'><a href={cv} target='_blank'><FaFile /></a></li> {/*download=""*/}
                <li title='Whatsapp'><a href="https://wa.me/244940869469?text=Olá%20fale%20mais%20sobre%20seu%20trabalho%20estou%20interessado!." target="_blank"><FaWhatsapp /></a></li>
                <li title='LinkEdin'><a href="https://www.linkedin.com/in/manuel-jos%C3%A9-52035223a/" target="_blank"><FaLinkedin /></a></li>
            </ul>
        </div>
    </section>
  )
}
