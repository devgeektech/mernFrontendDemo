import * as Yup from 'yup';

const AddToolSchema = Yup.object().shape({
  manufacturer: Yup.string().required('Manufacturer is required'),
  description: Yup.string().required('Description is required'),
  serialNumber: Yup.string().required('Serial number is required'),
  lastCalibration: Yup.string().when('naLastCalibration', {
    is: true,
    then: Yup.string(),
    otherwise: Yup.string()
      .required('Date of last calibration is required')
      /* .test('len', 'Invalid phone number', exclusive: false,(val) => {
        let fromDate = this.parent;
        console.log(val, fromDate);
      }), */
      .test({
        name: 'max',
        exclusive: false,
        params: {},
        message: "Last Calibration date can't exceed to the next calibration",
        test: function (value) {
          // console.log(this.parent);
          if (this.parent.naNextCalibration === true) {
            return true;
          } else {
            if (value > this.parent.nextCalibration) {
              return false;
            } else {
              return true;
            }
          }
        },
      }),
  }),
  nextCalibration: Yup.string().when('naNextCalibration', {
    is: true,
    then: Yup.string(),
    otherwise: Yup.string().required('Date of next calibration is required'),
  }),
});

export { AddToolSchema };
