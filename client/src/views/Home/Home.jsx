import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDogs } from '../../redux/actions';
import CardsContainer from '../../components/CardContainer/CardContainer';
import SearchBar from '../../components/SearchBar/SearchBar';
import style from './Home.module.css';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());
  }, []);

  return (
    <div className={style.homecontainer}>
      <SearchBar />
      <CardsContainer />
    </div>
  );
};

export default Home;
