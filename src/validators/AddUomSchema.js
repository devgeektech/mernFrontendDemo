import * as Yup from 'yup';

const AddUomSchema = Yup.object().shape({
  uomName: Yup.string().required('Name is required'),
  incrementType: Yup.string().required('Increment type is required'),
  maximumValue: Yup.string().required('Maximum value is required'),
});

export { AddUomSchema };
