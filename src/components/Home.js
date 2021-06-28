import React from 'react';
import { useEffect, useState } from "react";
import MovieBox from "./MovieBox";
import Pager from './Pager';
import UserAPI from './UserAPI';

const Home = () => {
  const [list, setList] = useState();
  let [page, setPage] = useState(1);
  const API = new UserAPI(process.env.REACT_APP_USERS_API_BASE_URL);

  useEffect(() => {
    fetchMovieData();
  }, [page]);
  async function fetchMovieData() {
    let params = {

      page_number: page
    };
    const response = await API.getList(params);
    setList(response);
  }

  return (
    <div>
       <Pager page={page} setPage={setPage}/>
      <div className="container">
        <div className="grid">
          {list && list.map((movie) => <MovieBox list={movie} />)}
        </div>
        <Pager page={page} setPage={setPage}/>
      </div>
    </div>
  );
};

export default Home;