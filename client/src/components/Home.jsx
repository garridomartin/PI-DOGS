import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from '../redux/actions';
import { Card } from './index';
import {
  Paginado,
  FilterByAlphabet,
  FilterByWeight,
  SearchBar,
  FilterByOrigin,
  FilterByTemperament,
} from '../containers/index';
import style from './Home.module.css';

const Home = () => {
  const allDogs = useSelector((state) => state.dogs);
  //console.log(allDogs[0].temperamento);
  const [order, setOrder] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);
  const [previousPage, setPreviousPage] = useState(1); //! Estado para almacenar la página anterior, solucion pedida

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  //!PAGINADO
  const getCurrentDogs = () => {
    const positionOfLastDog = currentPage * dogsPerPage;
    const positionOfFirstDog = positionOfLastDog - dogsPerPage;
    return allDogs.slice(positionOfFirstDog, positionOfLastDog);
  };
  const currentDogs = getCurrentDogs();

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  function pagePrev() {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  }

  function pageNext() {
    let lastPage = Math.ceil(allDogs.length / dogsPerPage);
    if (currentPage < lastPage) setCurrentPage(currentPage + 1);
  }

  useEffect(() => {
    const storedPage = localStorage.getItem('previousPage'); // Recuperar la página almacenada en localStorage SOLUC VUELTA DETAIL
    const previousPage = storedPage ? parseInt(storedPage) : 1; // Convertir a número, si no está almacenada, usar 1 como valor predeterminado
    setCurrentPage(previousPage);
  }, []); // SE ejecuta solo una vez al cargar el componente

  //!RELOAD
  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getDogs());
  };

  return (
    <div className={style.container}>
      <div>
        <SearchBar />
      </div>

      <div>
        <button className={style.button} onClick={handleClick}>
          RESET FILTERS
        </button>
        <FilterByOrigin
          setCurrentPage={setCurrentPage}
          order={order}
          setOrder={setOrder}
        />
        <FilterByTemperament
          setCurrentPage={setCurrentPage}
          order={order}
          setOrder={setOrder}
        />
      </div>
      <div>
        <div>
          <FilterByAlphabet
            setCurrentPage={setCurrentPage}
            order={order}
            setOrder={setOrder}
          />
          <FilterByWeight
            setCurrentPage={setCurrentPage}
            order={order}
            setOrder={setOrder}
          />
        </div>
      </div>
      <Paginado
        dogsPerPage={dogsPerPage}
        allDogs={allDogs.length}
        pagePrev={pagePrev}
        paginado={paginado}
        pageNext={pageNext}
        currentPage={currentPage} // solucion al resaltado de la pagina actual en el paginado
      />
      <div className={style.CardsContainer}>
        {currentDogs[0] ? (
          currentDogs.map((dog) => (
            <Card
              key={dog.id}
              id={dog.id}
              name={dog.name}
              altura={dog.altura}
              peso={dog.peso}
              expectativaDeVida={dog.expectativaDeVida}
              temperamento={dog.temperamento}
              imagen={dog.imagen}
            />
          ))
        ) : (
          <p>...</p>
        )}
      </div>
    </div>
  );
};
export default Home;
