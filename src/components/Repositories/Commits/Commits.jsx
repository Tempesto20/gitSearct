import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

function Commits({ commits_url, login, name }) {
  //commits_url : "https://api.github.com/repos/Tempesto20/gitSearct/commits{/sha}"
  // "commits_url": "https://api.github.com/repos/Tempesto20/Cat/commits{/sha}",
  // "git_commits_url": "https://api.github.com/repos/Tempesto20/Cat/git/commits{/sha}",
  const { id } = useParams();

  const [rep, setRep] = React.useState([]);

// console.log(commits_url)
// console.log(name)
// console.log(login)
// console.log(id)
//   const dw = 'https://api.github.com/repos/Tempesto20/gitSearct/commits';
  // console.log(dw)
  // const commit = commits_url;
  // console.log(commit)

  const repositories = useSelector((state) => state.repositoriesSlice.items);
  // const rep = repositories;
  // console.log(rep)

  const searchValue = useSelector((state) => state.filterSlice.searchValue);

  React.useEffect(() => {
    // const search = searchValue ? `&search=${searchValue}` : 'Tempesto_S'; //поиск
    axios
      .get(
        // `https://api.github.com/users/${login}/repos`
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
    <div className="">
      <div className="">
        <div className="">Данные </div>
        {rep.map((item, index) => {
          return (
            <div
              className=""
              key={index}
              // key={index}
            >
              <div className="">{item.commit.author.name}</div>
              <div className="">{item.commit.author.date}</div>
              <div className="">{item.commit.message}</div>
              {/* <div className="">{item.commit.author.name}</div>
            <div className="">{item.commit.author.date}</div>
            <div className="">{item.commit.message}</div> */}
            </div>
          );
        })}

        <div className="">
          <Link to="/" className="">
            Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Commits;
