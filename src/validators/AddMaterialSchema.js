import * as Yup from 'yup';

const AddMaterialSchema = Yup.object().shape({
  salesPartNumber: Yup.string().required('Sales part number is required'),
  materialDescription: Yup.string().required(
    'Material description is required'
  ),
  inStock: Yup.string().required('Qty in stock is required'),
  uom: Yup.string().required('Unit of measurement is required'),
  lowMarginAdmin: Yup.string().required('Low margin admin is required'),
  averageMarginAdmin: Yup.string().required('Average margin admin is required'),
  lowMarginUser: Yup.string().required('Low margin user is required'),
});

export { AddMaterialSchema };
