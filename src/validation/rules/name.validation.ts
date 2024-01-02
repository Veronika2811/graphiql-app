import * as Yup from 'yup';

export const nameValidation: Yup.StringSchema<
  string,
  Yup.AnyObject,
  undefined,
  ''
> = Yup.string()
  .test('is-capitalized', 'The first letter must be capitalized', (value) => {
    if (value && value.length > 0) {
      const firstLetter = value[0];
      return firstLetter === firstLetter.toUpperCase();
    }
    return true;
  })
  .matches(/^[А-Яа-яA-Za-z]+$/, 'The field should contain only letters.')
  .required('Name is required');
