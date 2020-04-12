import React, { Component } from 'react';

class AllInfo extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    const {
      firstName,
      lastName,
      jobCompany,
      jobTitle,
      jobLocation,
    } = this.props;
    return (
      <div>
        <h2>Here is the information you entered:</h2>
        First Name: <b>{firstName}</b>
        <br />
        Last Name: <b>{lastName}</b>
        <br />
        Company Name: <b>{jobCompany}</b>
        <br />
        Job Title: <b>{jobTitle}</b>
        <br />
        Job Location: <b>{jobLocation}</b>
        <br />
        <button className="Back" onClick={this.back}>
          Back
        </button>
      </div>
    );
  }
}

export default AllInfo;
