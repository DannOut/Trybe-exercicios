const maxCharacterHandler = (maxLength, value) => {
  let error = undefined
  if(value.length > maxLength ) error = `Máximo de ${maxLength} caractéres`;
  return error ? alert(error) : ""
}
export default maxCharacterHandler;

// verificar