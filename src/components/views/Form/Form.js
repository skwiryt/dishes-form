import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { Field, reduxForm, formValueSelector} from 'redux-form';
import { Stack, Box, Button, FormHelperText } from '@mui/material';

import FormModal from '../../common/FormModal';
import { validator } from './validator';
import styles from './Form.module.scss';
import { renderTextField, renderTimePicker, renderSelectField, renderNumberField } from './renderMUIfields';
import { renderFloatNumberField, renderDiscreteSlider } from './renderMUIfields';
import submit from './submit';
import showModal from './showModal';


let Form = (props) => {
  const { error, handleSubmit, pristine, reset, submitting, typeValue } = props;
  return (
    <form className={styles.component} onSubmit={handleSubmit(submit)}>
      <Stack spacing={3}>
        <Field name="name" component={renderTextField} label="Name"/>
        <Field name="preparationTime" component={renderTimePicker} label="Preparation time"/>
        <Field name="type" component={renderSelectField} label="Type"/>
        {typeValue === 'pizza' && <Field name="numberOfSlices" component={renderNumberField} label="Nb of slices"/>}
        {typeValue === 'pizza' && <Field name="diameter" component={renderFloatNumberField} label="Diameter"/>}
        {typeValue === 'soup' && <Field name="spicinessScale" component={renderDiscreteSlider} label="Spiciness scale"/>}
        {typeValue === 'sandwich' && <Field name="slicesOfBread" component={renderNumberField} label="Slices of bread"/>}
        {error && <FormHelperText error>{error}</FormHelperText>}
        <Box className={styles.buttonsBox}>
          <Button type="submit" disabled={submitting} variant="contained" color="primary">Submit</Button>
          <Button type="button" disabled={pristine || submitting} onClick={reset} variant="contained" color="primary">Clear</Button>
        </Box>        
      </Stack>
      <FormModal />
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  reset: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  typeValue: PropTypes.string,
};


Form = reduxForm({
  form: 'dishes',
  validate: validator,
  onSubmitSuccess: showModal,
})(Form);

const selector = formValueSelector('dishes');
Form = connect(
  state => {
    const typeValue = selector(state, 'type');    
    return {
      typeValue,
    };
  }
)(Form);

export default Form;