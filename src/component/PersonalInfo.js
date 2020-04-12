import React, { Component } from 'react';

class PersonalInfo extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { handler, firstName, lastName } = this.props;
    return (
      <div>
        <h2> Enter Your Personal Information</h2>
        <label>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={handler('firstName')}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={handler('lastName')}
          />
        </label>
        <button className="Next" onClick={this.continue}>
          Next >>
        </button>
      </div>
    );
  }
}

export default PersonalInfo;
