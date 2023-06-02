import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import style from './NavBar.module.css';

const NavBAr = () => {
  return (
    <div className={style.mainContainer}>
      <Link to='/home'>HOME</Link>
      <Link to='/create'>CREAR NUEVO PERRO</Link>
    </div>
  );
};

export default NavBAr;
