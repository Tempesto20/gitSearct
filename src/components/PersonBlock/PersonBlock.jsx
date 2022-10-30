import React from 'react';
import { Link } from 'react-router-dom';
import styles from './personBlock.module.scss';

function PersonBlock({ id, repos_url, login, avatar_url, html_url }) {
  // console.log(repos_url);
  // console.log(repositories);
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.avatar}>
            <Link to={`/person/${id}`} key={id}>
              <img src={avatar_url} alt="" className={styles.img} />
            </Link>
          </div>
          <div className={styles.title}>
            <div className={styles.login}>{login}</div>
          </div>

          <Link to={`/person/${id}`} key={id} className={styles.link}>
            <div className={styles.subtitle}>Перейти на страницу</div>
          </Link>
        </div>
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
