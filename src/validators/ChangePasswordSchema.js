import * as Yup from 'yup';

const ChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required('You are required to enter your Password'),
  newPassword: Yup.string()
    .required('You are required to enter your new password')
    .min(6, 'Minimum 6 characters are required')
    .max(15, 'Maximum 15 characters are allowed'),
  confirmPassword: Yup.string()
    .required('You are required to confirm your  new password')
    .when('newPassword', {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref('newPassword')],
        'Both password need to be the same'
      ),
    }),
});

export { ChangePasswordSchema };
