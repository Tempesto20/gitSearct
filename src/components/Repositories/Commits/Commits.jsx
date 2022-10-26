import React from "react";
import { Link, useParams } from 'react-router-dom';

function Commits({commits_url}) {
    
  const { id } = useParams();

  return (
    <div className="">
        <div className="">
            <div className="">commits</div>
            <div className="">{commits_url}</div>
            <div className="">
      <Link to='/' className="">Вернуться на главную</Link>
      </div>
        </div>
    </div>
  );
}

export default Commits;
