import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { dogsDetail } from '../redux/actions';
import style from './Detail.module.css';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dogDetail = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(dogsDetail(id));
  }, [dispatch, id]);

  return (
    <div className={style.cuerpoTarjeta}>
      {dogDetail &&
        dogDetail.map((dog) => (
          <div key={dog.ID} className={style.card}>
            <img src={dog.imagen} alt={dog.name} className={style.image} />
            <div>
              <h3 className={style.title}>{dog.name}</h3>
              <p className={style.text}>Altura: {dog.altura} cm.</p>
              <p className={style.text}>Peso: {dog.peso} kg.</p>
              <p className={style.text}>
                Expectativa de vida: {dog.expectativaDeVida}
              </p>
              <p className={style.text}>
                Temperamento: {dog.temperamento.join(', ')}
              </p>
            </div>
          </div>
        ))}
      <Link to='/home'>
        <button className={style.link}>Press HERE to go back</button>
      </Link>
    </div>
  );
};

export default Detail;
