const { createDog } = require("../controllers/createDogs");

const postDogsHandler = async (req, res) => {
  try {
    const { ID, name, altura, peso, expectativaDeVida, imagen, created } =
      req.body;
    console.log(req.body);
    const newDog = await createDog(
      ID,
      name,
      altura,
      peso,
      expectativaDeVida,
      imagen,
      created
    );
    res.status(201).json(newDog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  //llamar a la funcion que crea pokemones
  //llamar a la funcion que guarda los pokemones en la BD
  //mostrar el pokemon creado
};

module.exports = { postDogsHandler };
