import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const contactSchema = yup.object().shape({
  user_name: yup.string().required('* required'),
  user_email: yup
    .string()
    .email('* invalid format')
    .required('* required'),
  user_phone: yup.string().matches(phoneRegExp, '* invalid number'),
  // user_subject: yup.string(),
  message: yup.string().required('* required'),
});
