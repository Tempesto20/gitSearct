import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPerson } from '../../redux/slices/personSlice';
import PersonBlock from '../../components/PersonBlock/PersonBlock';
import styles from './home.module.scss';
import Skeleton from '../../components/PersonBlock/Skeleton';
import { RootState, useAppDispatch } from '../../redux/store';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const person = useSelector((state: RootState) => state.personSlice.items);
  const status = useSelector((state: RootState) => state.personSlice.status);
  const searchValue = useSelector((state: RootState) => state.filterSlice.searchValue).trim();

  // console.log(person);
  // const data = person.items;
  // console.log(data);

  // .filter(value => value.trim())
  const getPerson = async () => {
    const search = searchValue;
    if (search === '') return;
    dispatch(
      fetchPerson({
        search,
      }),
    );
  };

  React.useEffect(() => {
    getPerson();
  }, [searchValue]);

  const personArray = person.map((item) => <PersonBlock key={item.id} {...item} />);

  const skeletons = [...new Array(1)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          В данном разделе представлены подходящие аккаунты по запросу
        </div>
        <div className={styles.container}>
          <div className={styles.content}>
            {searchValue === '' ? skeletons : personArray}
          </div>
          <div className="content__items"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
/*
React.useEffect(() => {
  // const search = searchValue ? `&search=${searchValue}` : 'Tempesto_S'; //поиск
  axios
    .get(
      // `https://632c40f21aabd83739975297.mockapi.io/items?${search} `,
      // `https://api.github.com/${search}`
      // `https://api.github.com/search/users/${search}`
      // `https://api.github.com/search/users?q=${search}`
      `https://api.github.com/search/users?q=`+ searchValue
    )
    .then((response) => {
       console.log(response.data);
      //  setPerson(response.data);
    });

  window.scrollTo(0, 0); //для прокрутки в самый верх домашней страницы
}, [  searchValue ]);
*/
