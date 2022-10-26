import React from 'react';
import { Link } from 'react-router-dom';
import Repositories from '../Repositories/Repositories';

function PersonBlock({
    id,
  repos_url,
  login,
  avatar_url,
  html_url,
}) {

// console.log(repos_url);
// const repositories = repos_url;
// console.log(repositories);
  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="">
            <img src={avatar_url} alt="" />
          </div>
          <div className="">{login}</div>
          <div className="">
          </div>
          {/* <a href={html_url} target="_blanc" className="">Сылка на страницу</a> */}
        </div>
        <Link to={`/person/${id}`} key={id} className="">Перейти на страницу</Link>
      </div>
    </div>
  );
}

export default PersonBlock;



// avatar_url: 'https://avatars.githubusercontent.com/u/84270841?v=4';
// events_url: 'https://api.github.com/users/Tempesto20/events{/privacy}';
// followers_url: 'https://api.github.com/users/Tempesto20/followers';
// following_url: 'https://api.github.com/users/Tempesto20/following{/other_user}';
// gists_url: 'https://api.github.com/users/Tempesto20/gists{/gist_id}';
// gravatar_id: '';
// html_url: 'https://github.com/Tempesto20';
// id: 84270841;
// login: 'Tempesto20';
// node_id: 'MDQ6VXNlcjg0MjcwODQx';
// organizations_url: 'https://api.github.com/users/Tempesto20/orgs';
// received_events_url: 'https://api.github.com/users/Tempesto20/received_events';
// repos_url: 'https://api.github.com/users/Tempesto20/repos';
// score: 1;
// site_admin: false;
// starred_url: 'https://api.github.com/users/Tempesto20/starred{/owner}{/repo}';
// subscriptions_url: 'https://api.github.com/users/Tempesto20/subscriptions';
// type: 'User';
// url: 'https://api.github.com/users/Tempesto20';