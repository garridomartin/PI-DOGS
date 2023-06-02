import Card from "../Card/Card";
import style from "./CardContainer.module.css";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const dogs = useSelector((state) => state.dogs);
  return (
    <div className={style.CardsContainer}>
      {dogs.map((dog) => {
        return (
          <Card
            id={dog.id}
            name={dog.name}
            altura={dog.altura}
            peso={dog.peso}
            expectativaDeVida={dog.expectativaDeVida}
            temperamento={dog.temperamento}
            imagen={dog.imagen}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
