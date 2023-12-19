import styles from './CardProject.module.css';

export default function CardProject({ title, img, text, techs }) {
  return (
    <section className={styles.container}>

      <div>
        <img src={img} alt="imagem do projecto" />
      </div>

      <div className={styles.main_text}>
        <h3>{title}</h3>
        <p>{text}</p>


        <div className={styles.row} >
          {techs && techs.map((tec, id) => (

            <div key={id} className={styles.tech}>
              {tec}
            </div>

          ))}

        </div>
      </div>

    </section>
  )
}
