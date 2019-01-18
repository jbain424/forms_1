import React, {Component}  from "react"

class Radio extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { underwater, marital_status, stress_level, claustrophobic } = this.props
    return (
      <>
      <div className="radiobutton">
        <div onChange={this.props.handleRadioChange}>
         Can you breathe under water longer than 1 minutes?

            <label htmlFor="Yes">Yes</label>
            <input  type="radio" name="underwater" value="Yes" checked={underwater === "Yes"} id="Yes" />


            <label htmlFor="No">No</label>
            <input type="radio" name="underwater" value="No" checked={underwater === "No"} id="No" />


            <label htmlFor="I don't know">I do not know</label>
            <input type="radio" name="underwater" value="I don't know" checked={underwater === "I don't know"} id="I don't know" />
            </div>


            What is your marital Status?
            <div >
              <label htmlFor="married"> Married</label>
              <input type="radio" name="marital_status" value="Married" checked={marital_status === "Married"} id="married" />
              <label htmlFor="single"> Single</label>
              <input type="radio" name="marital_status" value="Single" checked={marital_status === "Single"} id="single" />
          </div>


          When you are in a stressful or difficult situation, how do you most frequently react?
          <div>
          <span>
          <label htmlFor="Determination"> Determination: I continue to confront the situation.</label>
          <input type="radio" name="stress_level" value="Determination: I continue to confront the situation." checked={stress_level === "Determination: I continue to confront the situation."} id="Determination" />
          </span>
          </div>

          <div>
          <span>
          <label htmlFor="Defeat"> Defeat: I stop confronting the situation.</label>
          <input type="radio" name="stress_level" value="Defeat: I stop confronting the situation." checked={stress_level === "Defeat: I stop confronting the situation."} id="Defeat" />
          </span>
          </div>

          <div>
          <span>
          <label htmlFor="Anger"> Anger: I become upset at the situation.</label>
          <input type="radio" name="stress_level" value="Anger: I become upset at the situation." checked={stress_level === "Anger: I become upset at the situation."} id="Anger" />
          </span>
          </div>

          <div>
          <span>
          <label htmlFor="Resourcefulness"> Resourcefulness: I seek help to confront the situation.</label>
          <input type="radio" name="stress_level" value="Resourcefulness: I seek help to confront the situation." checked={stress_level === "Resourcefulness: I seek help to confront the situation."} id="Resourcefulness" />
          </span>
      </div>



        Are you claustrophobic?
          <div>
            <label htmlFor="Yes">Yes</label>
            <input type="radio" name="claustrophobic" value="Yes" checked={claustrophobic === "Yes"} id="Yes" />

            <label htmlFor="No">No</label>
            <input type="radio" name="claustrophobic" value="No" checked={claustrophobic === "No"} id="No" />

            <label htmlFor="I don't know">I do not know</label>
            <input type="radio" name="claustrophobic" value="I don't know" checked={claustrophobic === "I don't know"} id="I don't know" />
            </div>
        </div>
      </>
    )
  }
}

export default Radio
