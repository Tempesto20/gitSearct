import React from "react";
import axios from 'axios';
import Search from "../Search/Search";


function Header() {



  return (
    <div className="">
        <div className="">Это хедр, чё нить запили</div>
        <div className="">
            <div className=""></div>
            <div className="">
                <Search />
            </div>
        </div>
    </div>
    );
}

export default Header;


/*
    // const [catLength, setCatLength] = React.useState([]);

    React.useEffect(() => {
        try {
          axios.get(
              `https://api.github.com/search/users?q=Tempesto_S`
              // `https://633db211f2b0e623dc79b585.mockapi.io/cats`
          ).then((resp) => {
            const data = resp.data;
          //   console.log(data)
          //   setCatLength(data);
          });
        } catch (error) {
          console.log(error + 'Header');
        }
      }, []);

      */