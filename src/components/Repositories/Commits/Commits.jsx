import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styles from './commits.module.scss';
// import { fetchCommit } from '../../../redux/slices/commitSlice';

function Commits({ login, name }) {
  //commits_url : "https://api.github.com/repos/Tempesto20/gitSearct/commits{/sha}"
  // "commits_url": "https://api.github.com/repos/Tempesto20/Cat/commits{/sha}",
  // "git_commits_url": "https://api.github.com/repos/Tempesto20/Cat/git/commits{/sha}",
  const { id } = useParams();
  const dispatch = useDispatch();

  const [rep, setRep] = React.useState([]);

  const repositories = useSelector((state) => state.repositoriesSlice.items);
  // const commits = useSelector((state) => state.commitSlice.items);
  const searchValue = useSelector((state) => state.filterSlice.searchValue);
  // const rep = repositories;

  console.log(repositories);
  // const ror = repositories.find((obj) => obj.id === id);
  // console.log(ror);

  React.useEffect(() => {
    // const search = searchValue ? `&search=${searchValue}` : 'Tempesto_S'; //поиск
    axios
      .get(
        // `https://api.github.com/repos/${login}/${name}/commits`,
        `https://api.github.com/repos/Tempesto20/gitSearct/commits`,
        // `https://api.github.com/repos/Tempesto20/gitSearct/commits`,
        // `https://api.github.com/repos/${login}/${name}/commits`
        // `${commit}`
      )
      .then((response) => {
        // console.log(response.data);
        setRep(response.data);
      });

    window.scrollTo(0, 0); //для прокрутки в самый верх домашней страницы
  }, [login]);

  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.preview}>Commits:</div>
          <div className={styles.content}>
            {rep.map((item, index) => {
              const date = new Date(item.commit.author.date);
              const data = date.toLocaleDateString();
              return (
                <div className={styles.border} key={index}>
                  <div className={styles.title}>
                    <div className={styles.name}>
                      <p>Автор: </p>
                      {item.commit.author.name}
                    </div>
                    <div className={styles.message}>
                      <p>Комментарий:</p>
                      {item.commit.message}
                    </div>
                    <div className={styles.date}>
                      <p>Дата:</p>
                      {data}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.bottom}>
            <div className="">
              <Link to={`/person/${id}`} key={id} className={styles.link}>
                Назад
              </Link>
            </div>
            <div className="">
              <Link to="/" className={styles.link}>
                Вернуться на главную
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commits;

//   for (let i = 0; i < repositories.length; i++) {
//     console.log(repositories[i].name);
//     console.log(repositories[i].commits_url);
//     // console.log("old" + " " + repositories[i].id);
//     // console.log("new" + " " +  id)
//     // console.log( repositories[i]);
//     if (repositories[i].id === id) {
//       console.log('yes');
//   axios
//   .get(
//     // `https://api.github.com/users/${login}/repos`
//     `https://api.github.com/repos/${searchValue}/gitSearct/commits`,
//     // `https://api.github.com/repos/Tempesto20/gitSearct/commits`,
//     // `https://api.github.com/repos/${login}/${name}/commits`
//     // `${commit}`
//   )
//   .then((response) => {
//     // console.log(response.data);
//     setRep(response.data);
//   });
//     } else {
//       console.log('no');
//     }
//   }

//   const getCats = async () => {
//     const search = searchValue;
//     dispatch(
//         fetchCommit({
//             name,
//             login
//         // search,
//       }),
//     );
//   };

//   React.useEffect(() => {
//     getCats();
//   }, [id]);

// {rep.map((item, index) => {
//     return (
//       <div
//         className=""
//         key={index}
//         // key={index}
//       >
//         <div className="">{item.commit.author.name}</div>
//         <div className="">{item.commit.author.date}</div>
//         <div className="">{item.commit.message}</div>
//         {/* <div className="">{item.commit.author.name}</div>
//       <div className="">{item.commit.author.date}</div>
//       <div className="">{item.commit.message}</div> */}
//       </div>
//     );
//   })}
