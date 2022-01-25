import * as Yup from 'yup';

const AddTaskSchema = Yup.object().shape({
  itemId: Yup.string().required('Item id is required'),
  technology: Yup.string().required('Technology application is required'),
  description: Yup.string().required('Description is required'),
  schedule: Yup.string().required('Schedule is required'),
  category: Yup.string().required('Category is required'),
  subcategory: Yup.string().required('Sub category is required'),
  // businessRules: Yup.array().required('Business rules is required'),
  /* businessRules: Yup.array().of(
    Yup.object().shape({
      label: Yup.string().required(),
      value: Yup.string().required(),
    })
  ), */
  // workHours: Yup.string().required('Work hours is required'),
  uom: Yup.string().required('Unit of measure is required'),
  rates: Yup.number().required('Rates is required').typeError('Only numbers are allowed'),
  // .integer('Only numbers are allowed'),
});

export { AddTaskSchema };
