import React from 'react';
import { Link } from 'react-router-dom';
import pain from '../../assets/img/pain.jpg';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.preview}>Ничего не найдено</div>
          <div className={styles.pain}></div>
          <img src={pain} alt="" className={styles.painImg} />
          <p className={styles.description}>Извините</p>

          <div className="">
            <Link to="/" className={styles.link}>
              <div className={styles.subtitle}>Вернуться на главную</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundBlock;
