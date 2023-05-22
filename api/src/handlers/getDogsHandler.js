const getDogsHandler = (req, res) => {
  const { name } = req.query; //name es la raza de un perro que desee buscar por query
  if (name)
    res.send(
      `quiero llamar a la funcion que busca a los que se llaman ${name}`
    );
  //si se define el query...
  else res.send(`vienen todos los perros`);

  //LLAMAR A LA FUNCION que obtiene los datos de la bdd
  //llamar a la funcion que obtiene los datos del a api externa
  //unir los datos unificando el formato
  //cuando tenga los datos, responder
};

const getDogsByIdHandler = (req, res) => {
  const { id } = req.params;
  res.send(`NIY: estoy en posts detail by ${id}`);
};

const getTemperamentsHandler = (req, res) => {
  res.send(`NIY: estoy en posts temperaments`);
};

module.exports = {
  getDogsHandler,
  getDogsByIdHandler,
  getTemperamentsHandler,
};
