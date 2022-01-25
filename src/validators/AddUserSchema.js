import * as Yup from 'yup';

const AddUserSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required')
    .test('length', 'Must have more than 1 character', (value) => {
      return value && value.length > 1;
    })
    .test('alphabets', 'First name must only contain alphabets', (value) => {
      return /^[A-Za-z ]+$/.test(value);
    })
    .max(15, 'Maximum 15 characters are allowed'),
  lastName: Yup.string()
    .required('Last name is required')
    .test('length', 'Must have more than 1 character', (value) => {
      return value && value.length > 1;
    })
    .test('alphabets', 'Last name must only contain alphabets', (value) => {
      return /^[A-Za-z ]+$/.test(value);
    })
    .max(15, 'Maximum 15 characters are allowed'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.number()
    .typeError('Only numbers are allowed')
    .required('Phone number is required')
    .test('len', 'Invalid phone number', (val) => {
      if (val) {
        if (val.toString().length < 8 || val.toString().length > 10) {
          return false;
        } else {
          return true;
        }
      }
    }),
  
});

export { AddUserSchema };
