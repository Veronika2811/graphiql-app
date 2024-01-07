import { nameValidation } from './name.validation';

describe('nameValidation', () => {
  it('returns an error if the name is missing', () => {
    expect(() => nameValidation.validateSync(null)).toThrow(
      'yup_required_field'
    );
  });

  it('returns an error if the name is digit', () => {
    const testValue = 123;

    expect(() => nameValidation.validateSync(testValue)).toThrow(
      'yup_only_letters'
    );
  });

  it('returns an error if the first letter of the name is not capitalized', () => {
    const testValue = 'john';

    expect(() => nameValidation.validateSync(testValue)).toThrow(
      'yup_capitalize_first_letter'
    );
  });

  it('passes validation if the first letter of the name is capitalized', () => {
    const testValue = 'John';

    expect(() => nameValidation.validateSync(testValue)).not.toThrow();
  });
});
