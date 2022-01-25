import * as Yup from 'yup';

const AddComplianceSchema = Yup.object().shape({
  cardName: Yup.string().required('Card name is required'),
  cardNumber: Yup.string().required('Card number is required'),
  //issueDate: Yup.string().required('Issue date is required'),
  issueDate: Yup.string().when('naIssue', {
    is: true,
    then: Yup.string(),
    otherwise: Yup.string().required('Issue date is required'),
  }),
  // state: Yup.string().required('State is required'),
  expiryDate: Yup.string().when('naExpiry', {
    is: true,
    then: Yup.string(),
    otherwise: Yup.string().required('Expiry date is required'),
  }),
  /* cardFrontImage: Yup.mixed().when('naCardImage', {
    is: 'true',
    then: Yup.string(),
    otherwise: Yup.string().required('Front image is required'),
  }), */
  /* cardFrontImage: Yup.mixed().test(
    'fileSize',
    'The file is too large',
    (value) => {
      if (value === undefined) return false;
      console.log('value', value);
      if (!value.length) return true; // attachment is optional
      return value[0].size <= 2000000;
    }
  ), */
});

export { AddComplianceSchema };
