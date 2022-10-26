import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchPerson } from '../../redux/slices/personSlice';
import styles from './fullCat.module.scss';
import Repositories from '../../components/Repositories/Repositories';

// Детальный данный по котику по id

const FullCat = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const navigate = useNavigate();

  //const params = useParams();
  //console.log(params);

  const searchValue = useSelector((state) => state.filterSlice.searchValue);

  const person = useSelector((state) => state.personSlice.items);
  const status = useSelector((state) => state.personSlice.status);
  // console.log(person);
  // console.log(status);

// const repositories = person.repos_url;
// console.log("person" + " " + person)
// console.log("repositories" + " " + repositories)
  return (
    <div className="">
      <div className="">
        <div className="">Full</div>
        {
          person.map((item,index)=>{
            return(
              <div className="" key={item.id}>
              <div className="">
                <img src={item.avatar_url} alt="" />
              </div>
              <div className="">{item.login}</div>
              <div className="">

              </div>
            </div>
            );
          })
        }
<div className="">
{
          person.map((item)=><Repositories  key={item.id} {...item} />)
 }
</div>
      </div>
      <div className="">
      <Link to='/' className="">Вернуться на главную</Link>
      </div>
    </div>
  );
};

export default FullCat;






  // React.useEffect(() => {
  //   // const search = searchValue ? `&search=${searchValue}` : 'Tempesto_S'; //поиск
  //   axios
  //     .get(
  //       `https://api.github.com/search/users?q=`+ searchValue
  //     )
  //     .then((response) => {
  //        console.log(response.data);
  //       //  setPerson(response.data);
  //     });

  //   window.scrollTo(0, 0); //для прокрутки в самый верх домашней страницы
  // }, [  searchValue ]);

  //   const getCats = async () => {
  //   dispatch(fetchPerson());
  // };

  // React.useEffect(() => {
  //   getCats();
  // }, [id]);

// const getCats = async () => {
//   dispatch(fetchPerson({ id }));
// };

// React.useEffect(() => {
//   getCats();
// }, [id]);

// const [cat, setCat] = React.useState<{
//   img: string;
//   name: string;
//   breed: string;
//   description: string;
//   price: number;
// }>({
//   img: '',
//   name: '',
//   breed: '',
//   description: '',
//   price: 0,
// });

// React.useEffect(() => {
//   async function fetchCat() {
//     try {
//       const { data } = await axios.get('https://633db211f2b0e623dc79b585.mockapi.io/cats/' + id);
//       setCat(data);
//     } catch (error) {
//       console.log(error + 'FullCat');
//       navigate('/'); // для перехода на главную страницу, если пицца не нашлась
//     }
//   }
//   fetchCat();
// }, [id, navigate]);

// if (!cat) {
//   //если пицца ещё не загрузилась, ничего не выводи
//   return <> Загрузка...</>;
// }
