import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPerson } from '../../redux/slices/personSlice';
import PersonBlock from '../../components/PersonBlock/PersonBlock';

function Home() {
  const dispatch = useDispatch();

  const person = useSelector((state) => state.personSlice.items);
  const searchValue = useSelector((state) => state.filterSlice.searchValue);
  // console.log(person);
  // const data = person.items;
  // console.log(data);
  
  const getCats = async () => {
    const search = searchValue;
    dispatch(
      fetchPerson({
        search,
      }),
    );
  };

  React.useEffect(() => {
    getCats();
  }, [searchValue]);

  // const personArray = person.map((item) => <PersonBlock key={item.id} {...item} />);

  return (
    <div className="container">
      <div className="content__top">Все контакты</div>
      <div className="content__title">
        {person.map((item) => 
          <PersonBlock key={item.id} {...item} />
        )}
        {/* <PersonBlock /> */}
      </div>
      <div className="content__items"></div>
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
