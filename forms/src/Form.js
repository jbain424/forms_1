import React from 'react';
const countries = require('./Countries.json');


class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "",
      reason: "",
      diet: "",
      country: "",
      formCompleted: false,
      formSubmitted: false
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      formCompleted: true
    })
  }


  handleConfirm = (event) => {
    event.preventDefault()
    this.setState({
      formSubmitted: true
    })
  }

  render() {
    const { name, birthday, reason, diet, formCompleted, formSubmitted, country } = this.state
    if(!formSubmitted) {
    return (
        <>
        <h1>Mission to Mars Registration Form</h1>
          <div>

            <form className="form" onChange={this.handleChange}>
              <label htmlFor="name" >Name</label>
              <input name="name" type="text" placeholder="Full Name" value={name} id="name"/>
              <label htmlFor="DOB"> Date Of Birth: </label>
              <input type="date" id="dob" name="birthday" value={birthday} min="1900-01-01" max="2019-01-31" />

              <label htmlFor="Country">Country</label>
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

              <label htmlFor="yourReason">Why do want to be a Mars Explorer?</label>
              <textarea rows='5' cols='25' wrap='soft' overflow='scroll'  name="reason" placeholder="explain why we should select you!" type="text" id="reason" value={reason} />

                <button onClick={this.handleSubmit}>Submit</button>
                <div className="formSubmit">
                  <ul>{formCompleted ? `
                  Your name: ${name}
                  DOB: ${birthday}
                  Diet: ${diet}
                  Reason: ${reason}
                  Country: ${country}
                  Are You Ready To Apply?` : ""}</ul>
                </div>
              </form>
            </div>

            <button onClick={this.handleConfirm}>Confirm</button>

            </>
          )
        } else {
          return (
            <>
              <p id="pageConfirm">You have successfully submitted the application! Welcome to Mars!</p>
            </>
          )
        }
    }
}

export default Form
