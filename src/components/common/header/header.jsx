import { Link } from "react-router-dom";

import logo from '../../../assets/header/logo2.png';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <div>
          <Link to='/'>
            <img src={logo} alt="логотип" />
          </Link>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.upBlock}>
          <div className={styles.title}>
            <h1>Интернет магазин мужской, женской и детской одежды</h1>
          </div>
          <div className={styles.button}>
            <button>Вход</button>
            <button>Корзина</button>
          </div>
        </div>
        <div className={styles.downBlock}>
          <input />
          <Link to='/'>Главная</Link>
          <Link to='men'>Мужская</Link>
          <Link to='women'>Женская</Link>
          <Link to='children'>Детская</Link>
          <div>Тел: 8-(000)-000-00-00</div>
        </div>
      </div>
    </div>
  )
}