import React, { Component } from 'react';
import {
  Button,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Checkbox,
} from '@material-ui/core';

class Main extends Component {
  state = {
    form: [],
    houseNumber: '12',
    codeOfHighRisk: '',
    ipv: false,
    peniaIII: false,
    bcg: false,
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

  // handler = (e, index) => {
  //   this.state.form = e.targe.value;
  //   this.setState({ form: this.state.form });
  // };

  render() {
    const {
      form,
      houseNumber,
      codeOfHighRisk,
      ipv,
      bcg,
      peniaIII,
    } = this.state;
    return (
      <div>
        <Typography variant="h3">CHW Survay </Typography>
        {/* <Typography variant="h3" gutterBottom>
          From
        </Typography> */}

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
              <TextField label="Area or Mohallah Name" />
              <TextField label="UC Name" />
              <TextField label="Street Name" />
              <TextField label="Building Name" />
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
              <TextField label="Cast" />
              <TextField label="Guardian" />
              <TextField label="Language" />
              <TextField label="Socioeconomics Group" />
              <br />
              {/* Child Information */}
              <Typography variant="h6">Child Information </Typography>
              <TextField label="Child Name" />
              <TextField label="Number of Child" type="Number" />
              <TextField
                id="date"
                label="Birthday"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField label="Number of Child" type="Number" />
              <br />
              <br />
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender"
                // value={value}
                // onChange={handleChange}
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

              <FormControlLabel
                control={
                  <Checkbox
                    checked={ipv}
                    onChange={this.handlerCheckbox}
                    name="ipv"
                  />
                }
                label="IPV"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={peniaIII}
                    onChange={this.handlerCheckbox}
                    name="peniaIII"
                  />
                }
                label="Penia III"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={bcg}
                    onChange={this.handlerCheckbox}
                    name="bcg"
                  />
                }
                label="BCG"
              />

              <input type="submit" value="Submit Form" />

              {/* <Button
              
                variant="contained"
                color="primary"
                component="span"
                onSubmit={() => {
                  this.submit();
                }}
              >
                Submit Form
              </Button> */}
            </form>
          );
        })}
      </div>
    );
  }
}

export default Main;
