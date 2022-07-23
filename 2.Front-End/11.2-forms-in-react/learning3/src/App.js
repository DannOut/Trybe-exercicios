import './App.css';

import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <form method="get" action="test.php">
        <fieldset>
          <legend>Order a T-Shirt</legend>
          <p>
            Write your name (simple textbox): <input type="text" />
          </p>
          <p>
            Choose your size (simple select):
            <select>
              <option value="s">Small</option>
              <option value="m">Medium</option>
              <option value="l">Large</option>
              <option value="xl">Extra Large</option>
            </select>
          </p>
          <div>
            What address do you want to use? (editable pseudoselect)
            <fieldset class="elist">
              <legend>Address&hellip;</legend>
              <ul>
                <li>
                  <input type="radio" value="1" id="address-switch_1" checked />
                  <label for="address-switch_1">
                    <input
                      type="text"
                      value="19 Quaker Ridge Rd. Bethel CT 06801"
                    />
                  </label>
                </li>
                <li>
                  <input type="radio" value="2" id="address-switch_2" />
                  <label for="address-switch_2">
                    <input
                      type="text"
                      value="1000 Coney Island Ave. Brooklyn NY 11230"
                    />
                  </label>
                </li>
                <li>
                  <input type="radio" value="3" id="address-switch_3" />
                  <label for="address-switch_3">
                    <input
                      type="text"
                      value="2962 Dunedin Cv. Germantown TN 38138"
                    />
                  </label>
                </li>
                <li>
                  <input type="radio" value="4" id="address-switch_4" />
                  <label for="address-switch_4">
                    <input
                      type="text"
                      value="915 E 7th St. Apt 6L. Brooklyn NY 11230"
                    />
                  </label>
                </li>
              </ul>
            </fieldset>
          </div>
          <p>
            Write a comment:
            <br />
            <textarea></textarea>
          </p>
          <p>
            <input type="reset" value="Reset" />{' '}
            <input type="submit" value="Send!" />
          </p>
        </fieldset>
      </form>
    );
  }
}
