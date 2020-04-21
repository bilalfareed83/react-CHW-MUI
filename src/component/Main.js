import React, { Component } from 'react';
import {
  Button,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from '@material-ui/core';
import Vaccines from './Vaccines';
import Reason from './Reason';
import './StyleMain.css';

class Main extends Component {
  state = {
    form: [],
    area: '',
    uc: '',
    street: '',
    building: '',

    // Basic information
    houseNumber: '',
    codeOfHighRisk: '',
    cast: '',
    guardian: '',
    language: '',
    socioeconomicsGroup: '',

    // Child Information
    childName: '',
    numberOfChild: '',
    dateOfBirth: '',
    ageOfChild: '',
    gender: '',
    vaccinationStatus: '',
    ipv: false,
    peniaIII: false,
    bcg: false,
    code1: false,
    code2: false,
    code3: false,
    code4: false,
    code5: false,
    code6: false,
  };

  addForm = () => {
    console.log('add function');
    this.setState({ form: [...this.state.form, ''] });
  };

  removeForm = (index) => {
    console.log('remove function');
    this.state.form.slice(index, 1);
    this.setState({ form: this.state.form });
  };

  submit = () => {
    console.log(this.state);
  };

  handler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerCheckbox = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  render() {
    console.log(this.props);
    const {
      form,
      area,
      uc,
      street,
      building,

      // Basic information
      houseNumber,
      codeOfHighRisk,
      cast,
      guardian,
      language,
      socioeconomicsGroup,

      // Child Information
      childName,
      numberOfChild,
      dateOfBirth,
      ageOfChild,
      gender,
      vaccinationStatus,
      ipv,
      peniaIII,
      bcg,
      code1,
      code2,
      code3,
      code4,
      code5,
      code6,
    } = this.state;
    return (
      <div>
        {/* <Nav /> */}
        <Typography variant="h3">CHW Survay </Typography>
        <div className="button">
          <Button
            variant="contained"
            color="primary"
            component="span"
            onClick={(e) => {
              this.addForm(e);
            }}
          >
            Add Form
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.props.signout}
          >
            Sign out
          </Button>
        </div>

        {form.map((val, index) => {
          return (
            <form
              key={index}
              onSubmit={() => {
                this.submit();
              }}
            >
              <Typography variant="h4">
                Form for Community Health Worker.
              </Typography>
              <br />

              <Button
                variant="contained"
                color="secondary"
                onClick={(index) => {
                  this.removeForm(index);
                }}
              >
                Delete Form
              </Button>
              <br />
              <br />

              {/* Location or Area Information */}
              <Typography variant="h6">Location Information </Typography>
              <TextField
                label="House Number"
                onChange={this.handler}
                name="houseNumber"
                value={houseNumber}
              />
              <TextField
                label="Area or Mohallah Name"
                name="area"
                value={area}
                onChange={this.handler}
              />
              <TextField
                label="UC Name"
                name="uc"
                value={uc}
                onChange={this.handler}
              />
              <TextField
                label="Street Name"
                name="street"
                value={street}
                onChange={this.handler}
              />
              <TextField
                label="Building Name"
                name="building"
                value={building}
                onChange={this.handler}
              />
              {/* Basic Information  */}
              <Typography variant="h6">Basic Information </Typography>
              <TextField label="House Number" />
              <br />
              <br />
              <FormLabel component="legend">Code for high risk.</FormLabel>
              <RadioGroup
                aria-label="code1"
                name="codeOfHighRisk"
                value={codeOfHighRisk}
                onChange={this.handler}
              >
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
                <FormControlLabel value="6" control={<Radio />} label="6" />
              </RadioGroup>
              <TextField
                label="Cast"
                name="cast"
                value={cast}
                onChange={this.handler}
              />
              <TextField
                label="Guardian"
                name="guardian"
                value={guardian}
                onChange={this.handler}
              />
              <TextField
                label="Language"
                name="language"
                value={language}
                onChange={this.handler}
              />
              <TextField
                label="Socioeconomics Group"
                name="socioeconomicsGroup"
                value={socioeconomicsGroup}
                onChange={this.handler}
              />
              <br />
              {/* Child Information */}
              <Typography variant="h6">Child Information </Typography>
              <TextField
                label="Child Name"
                name="childName"
                value={childName}
                onChange={this.handler}
              />
              <TextField
                label="Age of Child"
                type="Number"
                name="ageOfChild"
                value={ageOfChild}
                onChange={this.handler}
              />
              <TextField
                name="dateOfBirth"
                value={dateOfBirth}
                onChange={this.handler}
                label="Date of Birth"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="Number of Child"
                type="Number"
                name="numberOfChild"
                value={numberOfChild}
                onChange={this.handler}
              />
              <br />
              <br />
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender"
                value={gender}
                onChange={this.handler}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>

              <Typography variant="h6">
                Status of Routine Vaccination of 0-23 month of Child.{' '}
              </Typography>

              <FormLabel component="legend">Vaccination Status</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="vaccinationStatus"
                value={vaccinationStatus}
                onChange={this.handler}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>

              {vaccinationStatus === 'yes' ? (
                <Vaccines
                  ipv={ipv}
                  bcg={bcg}
                  peniaIII={peniaIII}
                  handlerCheckbox={this.handlerCheckbox}
                />
              ) : (
                ''
              )}
              {vaccinationStatus === 'no' ? (
                <Reason
                  handlerCheckbox={this.handlerCheckbox}
                  code1={code1}
                  code2={code2}
                  code3={code3}
                  code4={code4}
                  code5={code5}
                  code6={code6}
                />
              ) : (
                ''
              )}

              <input type="submit" value="Submit Form" />
            </form>
          );
        })}
      </div>
    );
  }
}

export default Main;
