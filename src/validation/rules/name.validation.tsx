import * as Yup from 'yup';

export const nameValidation = Yup.string()
  .required('yup_required_field')
  .matches(/^[А-Яа-яA-Za-z]+$/, 'yup_only_letters')
  .test('is-capitalized', 'yup_capitalize_first_letter', (value) => {
    if (value && value.length > 0) {
      const firstLetter = value[0];
      return firstLetter === firstLetter.toUpperCase();
    }
    return true;
  });
