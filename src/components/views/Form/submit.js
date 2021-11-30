import axios from 'axios';
import { SubmissionError } from 'redux-form';

import { API_URL } from '../../../config';


async function submit(values) {
  const {name, preparationTime, type, noOfSlices, diameter, spicinessScale, slicesOfBread} = values;
  const data = {
    name, type, diameter, 
    preparation_time: preparationTime.toString().substring(16, 24), 
    no_of_slices: Number(noOfSlices), spiciness_scale: spicinessScale, 
    slices_of_bread: Number(slicesOfBread),
  };
  // window.alert(`You submitted:\n\n${JSON.stringify(data, null, 2)}`);
  try {
    const response = await axios.post(API_URL + '/dishes', data);
    console.log('respone.data: ', response.data);
    
  }
  catch(err) {
    throw new SubmissionError({ _error: err.message });
  }
}

export default submit;