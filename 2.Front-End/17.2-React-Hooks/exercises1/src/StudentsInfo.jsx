import React from 'react';
// import PropTypes from 'prop-types'
import { useContext } from 'react';
import FormContext from './context/FormContext';

function StudentsInfo(props) {
  const { data } = useContext(FormContext);
  return (
    <ul className='naruto'>
      {data.map((student, index) => (
        <li key={index} className='sasuke'>
          <p>{`Nome: ${student.name}`}</p>

          <p>{`Idade: ${student.age}`}</p>

          <p>{`Cidade/UF: ${student.location}`}</p>

          <p>{`Módulo: ${student.module}`}</p>
        </li>
      ))}
    </ul>
  );
}

StudentsInfo.propTypes = {};

export default StudentsInfo;
