import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('You are required to enter correct Email')
    .required('You are required to enter your Email'),
  password: Yup.string().required('You are required to enter your Password'),
});

export { LoginSchema };
