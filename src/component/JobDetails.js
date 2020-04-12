import React, { Component } from 'react';

class JobDetail extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    const { handler, jobCompany, jobLocation, jobTitle } = this.props;
    return (
      <div>
        <h2> Enter Your Job Information</h2>
        <label>
          <input
            type="text"
            placeholder="Job Title"
            name="jobTitle"
            value={jobTitle}
            onChange={handler('jobTitle')}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Company Name"
            name="jobCompany"
            value={jobCompany}
            onChange={handler('jobCompany')}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Job Location"
            name="jobLocation"
            value={jobLocation}
            onChange={handler('jobLocation')}
          />
        </label>
        <button className="Back" onClick={this.back}>
          Back
        </button>
        <button className="Next" onClick={this.continue}>
          Next >>
        </button>
      </div>
    );
  }
}

export default JobDetail;
