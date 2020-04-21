import React from 'react';
import { Checkbox, FormControlLabel, Typography } from '@material-ui/core';

const Vaccines = (props) => {
  const { ipv, bcg, peniaIII, handlerCheckbox } = props;
  return (
    <React.Fragment>
      <Typography>If yes, so tick below vaccine.</Typography>
      <FormControlLabel
        control={
          <Checkbox checked={ipv} onChange={handlerCheckbox} name="ipv" />
        }
        label="IPV"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={peniaIII}
            onChange={handlerCheckbox}
            name="peniaIII"
          />
        }
        label="Penia III"
      />

      <FormControlLabel
        control={
          <Checkbox checked={bcg} onChange={handlerCheckbox} name="bcg" />
        }
        label="BCG"
      />
    </React.Fragment>
  );
};

export default Vaccines;
