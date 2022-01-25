import * as Yup from 'yup';

const AddSubcategorySchema = Yup.object().shape({
  technology: Yup.string().required('Technology application is required'),
  categoryName: Yup.string().required('Sub category is required'),
});

export { AddSubcategorySchema };
