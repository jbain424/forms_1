import React from 'react';
const countries = require('./Countries.json');


class Selects extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { birthday, country, diet } = this.props
    return (
      <div className="selects" onChange={this.handleSelect}>

          <label htmlFor="DOB"> Date Of Birth: </label>
          <input type="date" id="dob" name="birthday" value={birthday} min="1900-01-01" max="2019-01-31" />

          <label htmlFor="Country" >Country <abbr title="required">*</abbr></label>

          <select name="country">
            {["", ...countries].map(country => (
            <option value={country.name}>{country.name}</option>
            ))}
          </select>

          <label htmlFor="dietary">What do you want to eat?</label>
            <select name="diet" value={diet}>
              <option value="omnivore">Omnivore</option>
              <option value="vegeterian">Vegetarian</option>
              <option value="vegan">Vegan</option>
            </select>
      </div>
    )
  }
}

export default Selects
