import { useState } from 'react';

const Forms = () => {
  const [form, setForm] = useState({
    RazaDePerro: '',
    Altura: '',
    Peso: '',
    AniosDeVidaAproximados: '',
    Temperamento1: '',
    Temperamento2: '',
    Temperamento3: '',
    Temperamento4: '',
    Temperamento5: '',
  });

  const [errors, setErrors] = useState({
    RazaDePerro: '',
    Altura: '',
    Peso: '',
    AniosDeVidaAproximados: '',
    Temperamento1: '',
    Temperamento2: '',
    Temperamento3: '',
    Temperamento4: '',
    Temperamento5: '',
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    validate({ ...form, [property]: value }); //valido el estado, asi no hay delay
  };

  const validate = (form) => {
    const raza = form.RazaDePerro;
    if (raza.match(/^[A-Za-z]+$/)) {
      setErrors({ ...errors, RazaDePerro: '' });
    } else {
      setErrors({
        ...errors,
        RazaDePerro: 'Hay un error en la raza del perro a crear',
      });
    }
    if (form.RazaDePerro === '')
      setErrors({ ...errors, RazaDePerro: 'COMPLETAR ESTE CAMPO' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Raza de perro </label>
        <input
          type='text'
          name='RazaDePerro'
          value={form.RazaDePerro}
          onChange={handleChange}
        />
        {errors.RazaDePerro && <span>{errors.RazaDePerro}</span>}
      </div>
      <div>
        <label>Altura </label>
        <input
          type='text'
          name='Altura'
          value={form.Altura}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Peso</label>
        <input
          type='text'
          name='Peso'
          value={form.Peso}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Años de vida aproximados </label>
        <input
          type='text'
          name='AniosDeVidaAproximados'
          value={form.AniosDeVidaAproximados}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Temperamento 1 </label>
        <input
          type='text'
          name='Temperamento1'
          value={form.Temperamento1}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Temperamento 2 </label>
        <input
          type='text'
          name='Temperamento2'
          value={form.Temperamento2}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Temperamento 3 </label>
        <input
          type='text'
          name='Temperamento3'
          value={form.Temperamento3}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Temperamento 4 </label>
        <input
          type='text'
          name='Temperamento4'
          value={form.Temperamento4}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Temperamento 5 </label>
        <input
          type='text'
          name='Temperamento5'
          value={form.Temperamento5}
          onChange={handleChange}
        />
      </div>
      <button type='submit'>SUBMIT</button>
    </form>
  );
};

export default Forms;
