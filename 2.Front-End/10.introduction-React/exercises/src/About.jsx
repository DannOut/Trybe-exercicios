import React, { Component } from 'react';

class About extends Component {
  render() {
    const skills = ["HTML","CSS","REACT","JEST","JAVASCRIPT"] // adicione mais habilidades aqui
    const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>
    return (
      <span>
        <h1>Daniel Outeiro</h1>
        <h2>minhas habilidades:</h2>
        <ol> {jsxSkills} </ol>
        <p>naruteiro profissional</p>
      </span>
    );
  }
}
 export default About;