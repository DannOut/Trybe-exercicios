import React from 'react'
import { useState } from 'react'
import FormContext from './FormContext';
import PropTypes from 'prop-types';

export default function FormProvider({ children }) {
  const [ data, setData ] = useState([]);

  const addData = (personalInfo) => {
    setData(data.concat(personalInfo));
  };

  const contextValue = {
    data,
    setData,
    addData,
  };

  return (
    <FormContext.Provider value={ contextValue } >
      {children}
    </FormContext.Provider>
  )
}

FormProvider.prototype = {
  chidren: PropTypes.node.isRequired,
};
