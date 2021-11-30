import React from 'react';
import { TextField, FormControl, MenuItem, FormHelperText, Select, InputLabel, Typography } from '@mui/material';
import { TimePicker,  LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Slider from '@mui/material/Slider';

export const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField 
    label={label}
    error={touched && Boolean(error)}
    {...input}
    {...custom}
    helperText={touched && error}
  />    
);

export const renderTimePicker = ({ input, label, meta: { touched, error }, ...custom }) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <TimePicker
      ampm={false}
      openTo="hours"
      views={['hours', 'minutes', 'seconds']}
      inputFormat="HH:mm:ss"
      mask="__:__:__"
      label={label}
      value={input.value ? new Date(input.value) : new Date(0, 0, 0)}
      onChange={(newValue) =>  input.onChange(newValue)}
      renderInput={(params) => (<TextField {...params } error={touched && Boolean(error)} helperText={touched && error} />) }
    />
  </LocalizationProvider>
);

export const renderSelectField = ({ input, label, meta: { touched, error }, children }) => (  
  <FormControl sx={{ m: 1, minWidth: 120 }} error={touched && Boolean(error)}>
    <InputLabel id="select-helper-label">{label}</InputLabel>
    <Select
      labelId="select-helper-label"
      id="select-helper"
      value={input.value ? input.value : ''}
      label={label}
      onChange={(event) => input.onChange(event.target.value)}
    >
      <MenuItem value="none">
        <em>None</em>
      </MenuItem>
      <MenuItem value={'pizza'}>Pizza</MenuItem>
      <MenuItem value={'soup'}>Soup</MenuItem>
      <MenuItem value={'sandwich'}>Sandwich</MenuItem>
    </Select>
    {touched && Boolean(error) && <FormHelperText >{error}</FormHelperText>}
  </FormControl>
);

export const renderNumberField = ({ input, label, meta: { touched, error }, ...custom }) => ( 
  <TextField 
    inputProps={{
      step: 1,
      min: 1,
      max: 99999,
      type: 'number',
    }}
    label={label}
    variant="standard"
    error={touched && Boolean(error)}
    {...input}
    {...custom}
    helperText={touched && error}
  />  
);

export const renderFloatNumberField = ({ input, label, meta: { touched, error }, ...custom }) => ( 
  <TextField 
    inputProps={{
      lang:'en-US',
      step: 0.1,
      min: 1,
      max: 9999,
      type: 'number',
    }}
    label={label}
    variant="standard"
    error={touched && Boolean(error)}
    {...input}
    {...custom}
    helperText={touched && error}
  />  
);

export const renderDiscreteSlider = ({ input, label, meta: { touched, error }, ...custom }) => {
  const marks = [{value: 0,label: ''}, {value: 1,label: '1'}, {value: 2,label: '2'}, {value: 3,label: '3'},
    {value: 4,label: '4'}, {value: 5,label: '5'}, {value: 6,label: '6'}, {value: 7,label: '7'},
    {value: 8,label: '8'}, {value: 9,label: '9'}, {value: 10,label: '10'}];    
  const valuetext = (value)=> `${value}`;
  const valueLabelFormat = (value) => marks.findIndex((mark) => mark.value === value) + 1;
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} error={touched && Boolean(error)}>
      <Typography gutterBottom>{label}</Typography>
      <Slider
        aria-label="Restricted values"
        defaultValue={0}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        step={1}
        min={0}
        max={10}
        marks={marks}
        onChange={(event, newValue) => input.onChange(newValue)}
      />
      {touched && Boolean(error) && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

