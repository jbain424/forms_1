import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props)
    }

    render() {
      const { siblings, parents, grandparents } = this.props;

      return (
        <div className="checkboxes">
          <p>
            Does your family have a history of (check all that apply):
          </p>
          <label htmlFor="Cancer">Cancer</label>
            <input
              id="cancer"
              name="cancer"
              type="checkbox"
              onChange={this.props.handleCheckboxChange}
            />
            <label htmlFor="Heart Disease">Heart Disease</label>
            <input
              id="heart disease"
              name="heart disease"
              type="checkbox"
              onChange={this.props.handleCheckboxChange}
            />
            <label htmlFor="Diabetes">Diabetes</label>
            <input
              id="diabetes"
              name="diabetes"
              type="checkbox"
              onChange={this.props.handleCheckboxChange}
            />
            <p>
              Do you have any living (check all that apply):
            </p>

            <label htmlFor="Siblings">Siblings</label>
            <input
              id="siblings"
              name="siblings"
              type="checkbox"
              checked={siblings}
              onChange={this.props.handleCheckboxChange}
            />
              {siblings ? <select><option value="" disabled>How many?</option>
                <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option></select> : ""}
            <label htmlFor="Parents">Parents</label>
            <input
              id="parents"
              name="parents"
              type="checkbox"
              checked={parents}
              onChange={this.props.handleCheckboxChange}
            />
              {parents ? <select><option value="" disabled>How many?</option>
                <option>1</option><option>2</option></select> : ""}
            <label htmlFor="Grandparents">Grandparents</label>
            <input
              id="grandparents"
              name="grandparents"
              type="checkbox"
              checked={grandparents}
              onChange={this.props.handleCheckboxChange}
            />
            {grandparents ? <select><option value="" disabled>How many?</option>
              <option>1</option><option>2</option><option>3</option><option>4</option></select> : ""}

            <p>
              Check all educational credentials that you have received:
            </p>
            <label htmlFor="High School diploma or GED equivalent">High School diploma or GED equivalent</label>
            <input
              id="high school or GED"
              name="high school or GED"
              type="checkbox"
              onChange={this.props.handleCheckboxChange}
            />
            <label htmlFor="Associate Degree">Associate Degree</label>
            <input
              id="associate"
              name="associate"
              type="checkbox"
              onChange={this.props.handleCheckboxChange}
            />
            <label htmlFor="Bachelor's Degree">Bachelor Degree</label>
            <input
              id="bachelor"
              name="bachelor"
              type="checkbox"
              onChange={this.props.handleCheckboxChange}
            />
            <label htmlFor="Master's Degree">Master Degree</label>
            <input
              id="master"
              name="master"
              type="checkbox"
              onChange={this.props.handleCheckboxChange}
            />
            <label htmlFor="PhD">PhD</label>
            <input
              id="PhD"
              name="PhD"
              type="checkbox"
              onChange={this.props.handleCheckboxChange}
            />
            <label htmlFor="Other">Other</label>
            <input
              id="other"
              name="other"
              type="text"
              onChange={this.props.handleCheckboxChange}
            />
        </div>
      );
    }
  }

export default Checkbox
