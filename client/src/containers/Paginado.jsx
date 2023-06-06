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

export default Paginado;
