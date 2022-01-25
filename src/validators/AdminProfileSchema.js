import * as Yup from 'yup';

const AdminProfileSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

export { AdminProfileSchema };
