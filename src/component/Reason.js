import React from 'react';
import { Checkbox, FormControlLabel, Typography } from '@material-ui/core';

const Reason = (props) => {
  const { code1, code2, code3, code4, code5, code6, handlerCheckbox } = props;
  return (
    <React.Fragment>
      <Typography>If no, so tick below vaccine.</Typography>
      <FormControlLabel
        control={
          <Checkbox checked={code1} onChange={handlerCheckbox} name="code1" />
        }
        label="Code1"
      />

      <FormControlLabel
        control={
          <Checkbox checked={code2} onChange={handlerCheckbox} name="code2" />
        }
        label="Code2"
      />

      <FormControlLabel
        control={
          <Checkbox checked={code3} onChange={handlerCheckbox} name="code3" />
        }
        label="Code3"
      />
      <FormControlLabel
        control={
          <Checkbox checked={code4} onChange={handlerCheckbox} name="code4" />
        }
        label="Code4"
      />
      <FormControlLabel
        control={
          <Checkbox checked={code5} onChange={handlerCheckbox} name="code5" />
        }
        label="Code5"
      />
      <FormControlLabel
        control={
          <Checkbox checked={code6} onChange={handlerCheckbox} name="code6" />
        }
        label="Code6"
      />
    </React.Fragment>
  );
};

export default Reason;
