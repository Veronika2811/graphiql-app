import * as Yup from 'yup';

// A properly formatted email address
const nameValidation: Yup.StringSchema<string, Yup.AnyObject, undefined, ''> =
  Yup.string()
    .test('is-capitalized', 'The first letter must be capitalized', (value) => {
      if (value && value.length > 0) {
        const firstLetter = value[0];
        return firstLetter === firstLetter.toUpperCase();
      }
      return true;
    })
    .required('Name is required');

export default nameValidation;
