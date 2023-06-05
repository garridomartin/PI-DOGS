import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.Card}>
      <p className={style.Title}>Nombre: {props.name}</p>
      <p>Peso: {props.peso} kg.</p>
      <p>Temperamento: {props.temperamento.join(", ")}.</p>
      <img src={props.imagen} alt="Imagen" className={style.Image} />
    </div>
  );
};

export default Card;
