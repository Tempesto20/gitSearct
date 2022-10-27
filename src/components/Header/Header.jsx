import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Search from '../Search/Search';
// import git from '../../assets/svg/gita.svg';
import git from '../../assets/img/git.png';
import styles from './header.module.scss';

function Header() {
  const location = useLocation();

  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
        <Link to="/" >
          <div className={styles.logo}>
            <img src={git} alt="" className={styles.img} />
          </div>
          </Link>
          <div className={styles.content}>
            <div className={styles.title}>Платформа для поиска друзей в Github</div>
            <div className={styles.search}>{location.pathname === '/' && <Search />}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

/*
    // const [catLength, setCatLength] = React.useState([]);

    React.useEffect(() => {
        try {
          axios.get(
              `https://api.github.com/search/users?q=Tempesto_S`
              // `https://633db211f2b0e623dc79b585.mockapi.io/cats`
          ).then((resp) => {
            const data = resp.data;
          //   console.log(data)
          //   setCatLength(data);
          });
        } catch (error) {
          console.log(error + 'Header');
        }
      }, []);

      */
