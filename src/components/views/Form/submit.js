import axios from 'axios';
import { SubmissionError } from 'redux-form';

import { API_URL } from '../../../config';


async function submit(values) {
  const {name, preparationTime, type, noOfSlices, diameter, spicinessScale, slicesOfBread} = values;
  const data = {
    name, type, diameter, 
    preparation_time: preparationTime.toString().substring(16, 24), 
    no_of_slices: noOfSlices, spiciness_scale: spicinessScale, 
    slices_of_bread: slicesOfBread,
  };
  try {
    const response = await axios.post(API_URL + '/dishes', data);
    window.alert(`You submitted:\n\n${JSON.stringify(response.data, null, 2)}`);
  }
  catch(err) {
    throw new SubmissionError({ _error: err.message });
  }
}

export default submit;