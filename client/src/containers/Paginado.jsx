import React from 'react';
import style from './Paginado.module.css';

export default function Paginado({
  dogsPerPage,
  allDogs,
  paginado,
  currentPage,
  pagePrev,
  pageNext,
}) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <div className={style.paginationCenter}>
        <div className={style.number} onClick={pagePrev}>
          «
        </div>
        {pageNumber.map((number) => (
          <div
            className={`${style.number} ${
              currentPage === number ? style.currentPage : '' //solucion para darle estilo a la pagina actual
            }`}
            key={number}
            onClick={() => paginado(number)}
          >
            {number}
          </div>
        ))}
        <div className={style.number} onClick={pageNext}>
          »
        </div>
      </div>
    </nav>
  );
}

/*

import React from 'react';
import styles from './Paginado.module.css';

const Paginado = ({ dogsPerPage, allDogs, paginado }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.paginado}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginado(number)} className={styles.pageNumber}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginado;*/
