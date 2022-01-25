import * as Yup from 'yup';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('You are required to enter correct Email')
    .required('You are required to enter your Email'),
});

export { ForgotPasswordSchema };
