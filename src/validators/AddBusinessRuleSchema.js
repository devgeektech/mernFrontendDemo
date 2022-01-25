import * as Yup from 'yup';

const AddBusinessRuleSchema = Yup.object().shape({
  technology: Yup.string().required('Job type is required'),
  schedule: Yup.string().required('Schedule is required'),
  name: Yup.string().required('Time expected is required'),
});

export { AddBusinessRuleSchema };
