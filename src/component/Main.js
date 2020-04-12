import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import JobDetail from './JobDetails';
import AllInfo from './AllInfo';

class Main extends Component {
  state = {
    step: 1,

    // step 1
    firstName: '',
    lastName: '',

    //step 2
    jobTitle: '',
    jobCompany: '',
    jobLocation: '',
  };

  showStep = () => {
    const {
      step,
      firstName,
      lastName,
      jobCompany,
      jobTitle,
      jobLocation,
    } = this.state;
    if (step === 1) {
      return (
        <PersonalInfo
          handler={this.handlerChange}
          nextStep={this.nextStep}
          firstName={firstName}
          lastName={lastName}
        />
      );
    }

    if (step === 2) {
      return (
        <JobDetail
          handler={this.handlerChange}
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          jobCompany={jobCompany}
          jobLocation={jobLocation}
          jobTitle={jobTitle}
        />
      );
    }
    if (step === 3) {
      return (
        <AllInfo
          handler={this.handlerChange}
          previousStep={this.previousStep}
          firstName={firstName}
          lastName={lastName}
          jobCompany={jobCompany}
          jobLocation={jobLocation}
          jobTitle={jobTitle}
        />
      );
    }
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handlerChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
    console.log(this.state);
    const { step } = this.state;

    return (
      <div>
        <h2>Step {step} of 3</h2>
        {this.showStep()}
      </div>
    );
  }
}

export default Main;
