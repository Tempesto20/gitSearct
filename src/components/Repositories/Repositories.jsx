import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Repositories({ repos_url, login }) {
  const [rep, setRep] = React.useState([]);

  React.useEffect(() => {
    // const search = searchValue ? `&search=${searchValue}` : 'Tempesto_S'; //поиск
    axios.get(`https://api.github.com/users/${login}/repos`).then((response) => {
      console.log(response.data);
      setRep(response.data);
    });

    window.scrollTo(0, 0); //для прокрутки в самый верх домашней страницы
  }, [login]);

  return (
    <div className="">
      <div className="">Repositories</div>
      <div className="">
        {rep.map((item) => {
          return (
            <div className="" key={item.id}>
                <Link  to={`/commits/${item.id}`} key={item.id} className="">
                    <div className="">{item.name}</div>
                </Link>
              <div className="">{item.full_name}</div>
              {/* <div className="">{item.comments_url}</div>*/}
              <div className="">{item.commits_url}</div> 
              <div className="">{item.created_at}</div>
              <div className="">{item.language}</div>
              <div className="">{item.stargazers_count}</div>
              <div className="">{item.pushed_at}</div>
              <div className="">{item.size}</div>
              <div className="">{item.visibility}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Repositories;
