import { Link } from 'react-router-dom';
import styles from './Projects.module.css';
import CardProject from './card/CardProject';
import imgLoading from '../assets/img/loading.gif';



export default function Projects() {
  return (
    <section className={styles.container_project}>
      <div className={styles.text_center}>
        <h2>Meus Projectos</h2>
        <p>Projectos que desenvolvi.</p>
      </div>

      <div className={styles.flex}>
        <a href='#' target='_blank'>
            <CardProject techs={['React ','HTML 5', 'CSS 3']} title={'A Carregar'} img={imgLoading} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eos.'} />
        </a>

        <a href='#' target='_blank'>
          <CardProject techs={['HTML 5','CSS 3', 'Javascript']} title={'A Carregar'} img={imgLoading} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eos.'} />
        </a>

        <a href='#' target='_blank'>
          <CardProject techs={['Nodejs ','Express', 'Javascript']} title={'A Carregar'} img={imgLoading} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eos.'} />
        </a>

        <a href='#' target='_blank'>
          <CardProject techs={['HTML 5','CSS 3', 'Javascript']} title={'A Carregar'} img={imgLoading} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eos.'} />
        </a>
      </div>
    </section>
  )
}
