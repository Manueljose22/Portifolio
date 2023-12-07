import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from '../../assets/img/logo.png';
import {BiMenu, BiSun} from 'react-icons/bi'

export default function NavBar(){

    const [name, setName] = useState('');

    function hadleOnclick(e) {
       
        if (name === 'open') {
           setName('');
           
        } else if (!name) {
            setName('open')
        }
    }

    return(
        <header className={styles.header}>
            
            <button onClick={hadleOnclick} className={styles.btn_menu}><BiMenu/></button>
            
            <Link className={styles.logo} to={'/'} ><img src={logo} alt="logo" /></Link>
            
            <nav >
                <ul className={`${styles.menu} ${styles[name]}`}>
                    <li><Link className={styles.item} to={'/about'}>Sobre</Link></li>
                    <li><Link className={styles.item} to={'/skills'}>Habilidades</Link></li>
                    <li><Link className={styles.item} to={'/projects'}>Projectos</Link></li>
                </ul>
            </nav>
            <button className={styles.btn}><BiSun/></button>
        </header>
    )
}