import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRepositories } from '../../redux/slices/repositoriesSlice';
// import { fetchCommit } from '../../redux/slices/commitSlice';
import Commits from './Commits/Commits';
import book from '../../assets/img/book.png';
import star from '../../assets/img/starTests.png';
import styles from './repositories.module.scss';
import './colorLanguage.scss';

function Repositories({ repos_url, login }) {
  const dispatch = useDispatch();
  //   const { id } = useParams();
  // const navigate = useNavigate();

  //const params = useParams();
  //console.log(params);
  const repositories = useSelector((state) => state.repositoriesSlice.items);
  const status = useSelector((state) => state.repositoriesSlice.status);
  // console.log(repositories);
  //   console.log(status);

  const getCats = async () => {
    dispatch(fetchRepositories({ login }));
    // dispatch(fetchCommit({ login }));
  };

  React.useEffect(() => {
    getCats();
  }, [login]);

  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.preview}>Repositories</div>
          <div className={styles.content}>
            {repositories.map((item) => {
              const ponitLangoage = item.language.toString();
              const count = item.stargazers_count;
              return (
                <div className={styles.border} key={item.id}>
                  <div className={styles.title}>
                    <img src={book} alt="" className={styles.book} />
                    <Link to={`/commits/${item.id}`} key={item.id} className="">
                      <div className={styles.name}>{item.name}</div>
                    </Link>
                    <div className={styles.visibility}>{item.visibility}</div>
                  </div>
                  <div className={styles.subtitle}>
                    <div className={styles.point}>
                      <div className={`styles  ${ponitLangoage}`}>.</div>
                    </div>
                    <div className={styles.language}>{item.language}</div>
                    {count !== 0 ? (
                      <div className={styles.countStar}>
                        <img src={star} alt="" className={styles.star} />
                        <div className={styles.stargazers_count}>{item.stargazers_count}</div>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div className="">
              {
          repositories.map((item)=><Commits  key={item.id} {...item} />)
 }
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default Repositories;

//   const [rep, setRep] = React.useState([]);

//   React.useEffect(() => {
//     // const search = searchValue ? `&search=${searchValue}` : 'Tempesto_S'; //поиск
//     axios.get(`https://api.github.com/users/${login}/repos`).then((response) => {
//       console.log(response.data);
//       setRep(response.data);
//     });

//     window.scrollTo(0, 0); //для прокрутки в самый верх домашней страницы
//   }, [login]);

{
  /* <div className="">{item.full_name}</div> */
}
{
  /* <div className="">{item.comments_url}</div>*/
}
{
  /* <div className="">{item.commits_url}</div>  */
}
{
  /* <div className="">{item.created_at}</div> */
}

{
  /* <div className="">{item.pushed_at}</div> */
}
{
  /* <div className="">{item.size}</div> */
}
