import React from 'react';

class Radio extends React.Component {
  constructor() {
    super();
    this.state = {
      underwater: "",
      marital_status: "",
      stressful: "",
      claustrophobic: ""
    }
    render() {
      return(
        <>
        Can you breathe underwater longer than 1 minute?
        <label htmlFor="underwater"> Yes </label>
          <input
            type="radio"
            name="underwater"
            value="yes"
            checked={this.state.underwater === "yes"}
            id="underwater" />
        </>
      )
    }
  }
}
export default Radio;
