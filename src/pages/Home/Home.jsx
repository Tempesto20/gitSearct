import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPerson } from '../../redux/slices/personSlice';



function Home() {
  const dispatch = useDispatch();

  const searchValue = useSelector((state) => state.filterSlice.searchValue);
console.log(searchValue);
  const getCats = async () => {
   const search = searchValue; 
    dispatch(
      fetchPerson({
        search
      }),
    );
  };

  React.useEffect(() => {
    getCats();
  }, [searchValue]);

  return (
    <div className="container">
      <div className="content__top">
      {/* {person} */}
      </div>
      <h2 className="content__title">Все контакты</h2>
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