import styles from './Skills.module.css'
import Card from '../components/card/Card'
import Box from '../components/layouts/Box'
import {BiLogoJavascript, BiLogoReact, BiLogoHtml5, BiLogoCss3} from 'react-icons/bi';
import {FaDatabase, FaNodeJs, FaBootstrap} from 'react-icons/fa6';

export default function Skills() {
  return (
    <section className={styles.skills}>
      <div className={styles.title}>
        <h2>Habilidades</h2>
        <p>Minhas habilidades técnicas</p>
      </div>

      <Box>
      <Card 
        title={'Javascript'}
        classIcon={'icon'} 
        icon={<BiLogoJavascript/>} 
        text={'Desenvolvimento Web'}
        customClass={'width'}
      />
      <Card 
        title={'React'}
        classIcon={'icon'} 
        icon={<BiLogoReact/>} 
        text={'Desenvolvimento Web'}
      />
      <Card 
        title={'HTML 5'}
        classIcon={'icon'} 
        icon={<BiLogoHtml5/>} 
        text={'Desenvolvimento Web'}
      />
      <Card 
        title={'CSS 3'}
        classIcon={'icon'} 
        icon={<BiLogoCss3/>} 
        text={'Desenvolvimento Web'}
      />
      <Card
        title={'MySQL'}
        classIcon={'icon'} 
        icon={<FaDatabase/>} 
        text={'Banco de Dados'}
      />
      <Card 
        title={'NodeJs'}
        classIcon={'icon'} 
        icon={<FaNodeJs/>} 
        text={'Desenvolvimento Web'}
      />
      <Card 
        title={'Bootstrap'}
        classIcon={'icon'} 
        icon={<FaBootstrap/>} 
        text={'Desenvolvimento Web'}
      />
      </Box>
    </section>
  )
}
