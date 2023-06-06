import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './CreateDog.module.css';
import { postDog, getTemperament } from '../redux/actions';
import validate from '../containers/CreateValidate';

export const CreateDog = () => {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((state) => state.temperamento);
  const [errors, setErrors] = useState({});
  const [success] = useState(false);
  const [input, setInput] = useState({
    name: '',
    heightMin: '',
    heightMax: '',
    weightMin: '',
    weightMax: '',
    expectativaDeVida: '',
    temperamento: [],
  });

  useEffect(() => {
    dispatch(getTemperament());
  }, [dispatch]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    if (!input.temperamento.includes(e.target.value)) {
      setInput({
        ...input,
        temperamento: [...input.temperamento, e.target.value],
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // if (!Object.getOwnPropertyNames(errors).length && input.name && input.heightMin && input.heightMax && input.weightMin && input.weightMax && input.expectativaDeVida) {

    dispatch(postDog(input));
    alert('Dog Created Success');
    setInput({
      name: '',
      heightMin: '',
      heightMax: '',
      weightMin: '',
      weightMax: '',
      expectativaDeVida: '',
      image: '',
      temperamento: [],
    });
  }

  function handleDelete(e) {
    setInput({
      ...input,
      temperamento: input.temperamento.filter((temp) => temp !== e),
    });
  }

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <h1 className={style.h1}>Create Your Dog</h1>

        <div className={style.super}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label className={style.Lab}>
                <strong className={style.text1}>Breed Name: </strong>
              </label>
              <input
                type='text'
                value={input.name}
                name='name'
                onChange={(e) => handleChange(e)}
              />
              {errors.name && <p className='error'>{errors.name}</p>}
            </div>

            <div>
              <label className={style.Lab}>
                <strong className={style.text1}>Minimun Height: </strong>
              </label>
              <input
                type='text'
                value={input.heightMin}
                name='heightMin'
                onChange={(e) => handleChange(e)}
              />
              <label>
                <strong className={style.text1}> cm</strong>
              </label>
              {errors.heightMin && <p className='error'>{errors.heightMin}</p>}
            </div>

            <div>
              <label className={style.Lab}>
                <strong className={style.text1}>Maximum Height: </strong>
              </label>
              <input
                type='text'
                value={input.heightMax}
                name='heightMax'
                onChange={(e) => handleChange(e)}
              />
              <label>
                <strong className={style.text1}> cm</strong>
              </label>
              {errors.heightMax && <p className='error'>{errors.heightMax}</p>}
            </div>

            <div>
              <label className={style.Lab}>
                <strong className={style.text1}>Minumun Weight: </strong>
              </label>
              <input
                type='text'
                value={input.weightMin}
                name='weightMin'
                onChange={(e) => handleChange(e)}
              />
              <label>
                <strong className={style.text1}> Kg</strong>
              </label>
              {errors.weightMin && <p className='error'>{errors.weightMin}</p>}
            </div>

            <div>
              <label className={style.Lab}>
                <strong className={style.text1}>Maximum Weight: </strong>
              </label>
              <input
                type='text'
                value={input.weightMax}
                name='weightMax'
                onChange={(e) => handleChange(e)}
              />
              <label>
                <strong className={style.text1}> Kg</strong>
              </label>
              {errors.weightMax && <p className='error'>{errors.weightMax}</p>}
            </div>

            <div>
              <label className={style.Lab}>
                <strong className={style.text1}>Life Span: </strong>
              </label>
              <input
                type='text'
                value={input.expectativaDeVida}
                name='expectativaDeVida'
                onChange={(e) => handleChange(e)}
              />
              <label>
                <strong className={style.text1}> years</strong>
              </label>
              {errors.expectativaDeVida && (
                <p className='error'>{errors.expectativaDeVida}</p>
              )}
            </div>

            <div>
              <label className={style.Lab}>
                <strong className={style.text1}>Image: </strong>
              </label>
              <input
                type='text'
                value={input.image}
                name='image'
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div>
              <select onChange={(e) => handleSelect(e)}>
                <option className={style.text1} value='selected' hidden>
                  Temperaments
                </option>
                {allTemperaments
                  ?.sort(function (a, b) {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                  })
                  .map((temp) => {
                    return (
                      <option value={temp.name} key={temp.id}>
                        {temp.name}
                      </option>
                    );
                  })}
              </select>
              {input.temperamento.map((e) => {
                return (
                  <ul className='allSelecction' key={e}>
                    <li>
                      <p className='selecction'>
                        <strong>{e}</strong>
                      </p>
                      <button
                        onClick={() => handleDelete(e)}
                        className={style.x}
                      >
                        X
                      </button>
                    </li>
                  </ul>
                );
              })}
            </div>
          </form>
        </div>

        <div>
          <button type='submit' className={style.btnDog}>
            Create your Doggie!
          </button>
        </div>

        <Link to='/home'>
          <button className={style.btnDog2}>Back To Home</button>
        </Link>
      </form>

      {success ? <h2>Created Successfully</h2> : null}
    </div>
  );
};

export default CreateDog;

/*
export const EventCard = ({
  id,
  name,
  image,
  description,
  date,
  venue,
  hour,
}) => {
  const dateNew = new Date(date);
  const day = dateNew.getDate().toString().padStart(2, '0');
  const month = (dateNew.getMonth() + 1).toString().padStart(2, '0');
  const year = dateNew.getFullYear().toString();

  const formatDate = `${day}-${month}-${year}`;

  const formatHour = hour ? hour.slice(0, 5) : '-';
  return (
    <div className='flex font-sans mx-5 my-7 h-96'>
      <div className='flex-none w-48 relative '>
        <Link to={`/event/${id}`}>
          <img
            src={image}
            alt={name}
            className='absolute inset-0 w-full h-full object-cover rounded-l-lg  '
            loading='lazy'
          />
        </Link>
      </div>

      <form className='flex-auto p-6  bg-white rounded-r-lg'>
        <Link to={`/event/${id}`}>
          <div className='flex flex-wrap'>
            <h1 className='flex-auto text-lg font-semibold text-slate-900'>
              {name}
            </h1>
            <div className='w-full flex-none text-sm font-medium text-slate-700 mt-2'>
              {description}
            </div>
          </div>
          <div className='flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200'>
            <div className='space-x-2 flex text-sm'>
              <div className='mr-6 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white'>
                📆 {formatDate}
              </div>
              <div className=' h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white'>
                ⌚{formatHour}
              </div>
            </div>
          </div>
        </Link>

        <div className='flex space-x-4 mb-6 text-sm font-medium'>
          <div className='flex-auto flex space-x-4'>
            <Link to='/event/:eventName'>
              <button
                className='h-10 px-6 font-semibold rounded-md bg-black text-white hover:shadow-lg shadow-black/40 '
                type='submit'
              >
                Comprar
              </button>
            </Link>
          </div>

          <button
            className='flex-none flex items-center justify-center w-9 h-9 rounded-md hover:shadow-lg shadow-indigo-500/40 text-slate-300 border border-slate-200 hover:text-red-400'
            type='button'
            aria-label='Like'
          >
            <svg width='20' height='20' fill='currentColor' aria-hidden='true'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
              />
            </svg>
          </button>
        </div>
        <p className='text-sm text-slate-700'>{venue}</p>
      </form>
    </div>
  );
};
export default EventCard;*/
