import React, { useState, useContext } from 'react';
import FormContext from './context/FormContext';

export default function Form() {
  const [form, setForm] = useState({
    name: '',
    age: 0,
    city: '',
    module: '',
  });

  const { addData } = useContext(FormContext)

  const changeHandler = ({ target: { name, value } }) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form>
      <fieldset>
        <label htmlFor='name'>
          Nome
          <input
            type='text'
            value={form.name}
            onChange={changeHandler}
            name='name'
            id='name'
          />
        </label>
        <label htmlFor='age'>
          Idade
          <input
            type='number'
            value={form.age}
            onChange={changeHandler}
            name='age'
            id='age'
          />
        </label>
        <label htmlFor='city'>
          Cidade
          <input
            type='text'
            value={form.city}
            onChange={changeHandler}
            name='city'
            id='city'
          />
        </label>
      </fieldset>
      <fieldset>
        <legend>Módulo</legend>

        <label htmlFor='fundamentals'>
          Fundamentos
          <input
            type='radio'
            id='fundamentals'
            name='module'
            value='Fundamentos'
            checked={form.module === 'Fundamentos'}
            onChange={changeHandler}
          />
        </label>

        <br />

        <label htmlFor='frontend'>
          Front-end
          <input
            type='radio'
            id='frontend'
            name='module'
            value='Front-end'
            checked={form.module === 'Front-end'}
            onChange={changeHandler}
          />
        </label>

        <br />

        <label htmlFor='backend'>
          Back-end
          <input
            type='radio'
            id='backend'
            name='module'
            value='Back-end'
            checked={form.module === 'Back-end'}
            onChange={changeHandler}
          />
        </label>

        <br />

        <label htmlFor='cs'>
          Ciência da computação
          <input
            type='radio'
            id='cs'
            name='module'
            value='Ciência da computação'
            checked={form.module === 'Ciência da computação'}
            onChange={changeHandler}
          />
        </label>
      </fieldset>
      <button
        type='submit'
        onClick={(event) => {
          event.preventDefault();
          addData(form)
        }}
      >
        Enviar
      </button>
    </form>
  );
}

/* 
    Input do tipo text contendo o nome completo; FEITO
    Input do tipo number contendo a idade; FEITO
    Input do tipo text contendo a cidade; FEITO
    Quatro inputs do tipo radio button contendo o módulo que está estudando (Fundamentos, Front-end, Back-end ou Ciência da Computação);
    Um botão para submeter as informações. Nesse exercício você não precisa implementar o click, o botão deve apenas existir na aplicação.
 */
