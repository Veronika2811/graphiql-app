import { nameValidation } from './name.validation';

describe('validation rule nameValidation', () => {
  it('should returns an error if the name is missing', () => {
    expect(() => nameValidation.validateSync(null)).toThrow(
      'yup_required_field'
    );
  });

  it('should returns an error if the name is digit', () => {
    const testValue = 123;

    expect(() => nameValidation.validateSync(testValue)).toThrow(
      'yup_only_letters'
    );
  });

  it('should returns an error if the first letter of the name is not capitalized', () => {
    const testValue = 'john';

    expect(() => nameValidation.validateSync(testValue)).toThrow(
      'yup_capitalize_first_letter'
    );
  });

  it('should passes validation if the first letter of the name is capitalized', () => {
    const testValue = 'John';

    expect(() => nameValidation.validateSync(testValue)).not.toThrow();
  });
});
