import * as Yup from 'yup';

const AddTechnologySchema = Yup.object().shape({
  technologyName: Yup.string().required('Technology name is required'),
  technologyDescription: Yup.string().required(
    'Technology description is required'
  ),
});

export { AddTechnologySchema };
