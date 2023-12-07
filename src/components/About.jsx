import styles from './About.module.css';
import Card from './card/Card';
import Container from './layouts/Container';
import {FaGraduationCap, FaFileAlt} from 'react-icons/fa';



export default function About() {
  return (
    <section className={styles.about_container}>
      <Container title={'Carreira'} >
        <Card title={'Desenvolvedor Front-end Web'} 
            text={' Trabalhei meio período remotamente como freelancer, para algumas empresas inciantes nos últimos meses, criando soluções, interfaces de usuário. Trabalhei com uma variedade de técnologias, incluíndo HTML 5, CSS 3, JavaScript e muito mais.'}
        />

        {/* <Card title={'Desenvolvedor Front-end'} 
            text={' Trabalhei meio período remotamente como freelancer, para algumas empresas inciantes nosúltimos anos, criando soluções, interfaces de usuário. Trabalhei com uma variedade de técnologias,incluíndo HTML 5, CSS 3, JavaScript e muito mais.'}
        /> */}
        
      </Container>

      <Container title={'Formação'} icon={<FaGraduationCap />}>
        <Card title={'Engenharia Informática'} 
              text={'Frequência no 3º Ano, no Instituto Superior Politécnico do Cazenga.'} />

        <Card title={'Contabildade e Gestão'} 
              text={'Médio técnico em Contabilidade e Gestão, formado pelo Instituto  Médio de Económia de Luanda no período de 2014 à 2016.'} />
      </Container>

      <Container title={'Certificações'} icon={<FaFileAlt />}>
        <Card title={'Desenvolmento web (HTML5, CSS3 & Javascript)'} 
              text={'Partipei de uma formação patrocinada pela Unitel, no projecto UnitelCode na qual foi formado pela BUKA.'} />

        <Card title={'HTML 5 & CSS3'} 
              text={'Participei de um curso grátis de desenvolvimento web sobre estas tecnologias, na plataforma de cursos online B7web '} 
         />

        <Card title={'NodeJs + Express'} 
              text={'Formação em curso, sobre estas tecnologias na qual estou aprenderndo a criar APIs e o conceito sobre o que uma API REST e RESTfull e seus padrões. Na plataforma de cursos Online UDEMY.'} 
        />

        <Card title={'Hardware Help / Desktop'} 
              text={'Centro de Formação do São Domingos.'} 
        />
      </Container>

    </section>
  )
}
