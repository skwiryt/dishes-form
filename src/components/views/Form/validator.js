export const validator = values => {
  const errors = {};
  const {name, preparationTime, type, numberOfSlices, diameter, spicinessScale, slicesOfBread} = values;
  /*
  console.log('name: ', name);
  console.log('preparation time: ', preparationTime);
  console.log('type: ', type);
  console.log('numberOfSlices: ', numberOfSlices);
  console.log('diameter: ', diameter);
  console.log('spicinessScale: ', spicinessScale);
  console.log('slicesOfBread: ', slicesOfBread);
  */
  if (!name) {
    errors.name = 'Name is required';
  }
  if (!preparationTime) {
    errors.preparationTime = 'PreparationTime is required';
  } else if (!(preparationTime instanceof Date) || isNaN(preparationTime.getTime())) {
    errors.preparationTime = 'Wrong time format';
  }
  if (!type || type === 'none') {
    errors.type = 'Type is required';
  } else if (type === 'pizza') {
    if (!numberOfSlices) {
      errors.numberOfSlices = 'Number of slices is required';
    }
    if (!diameter) {
      errors.diameter = 'Diameter is required';
    }
  } else if (type === 'soup') {
    if (!spicinessScale) {
      errors.spicinessScale = 'Spiciness scale must be from 1 to 10';
    }
  
  }else if (type === 'sandwich') {
    if (!slicesOfBread) {
      errors.slicesOfBread = 'Number of slices is required';
    }
  }
  console.log('errors: ', errors);
  return errors;
};