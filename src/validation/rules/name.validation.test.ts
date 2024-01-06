import { nameValidation } from './name.validation';

describe('nameValidation', () => {
  it('returns an error if the name is missing', () => {
    expect(() => nameValidation.validateSync(null)).toThrow('Name is required');
  });

  it('returns an error if the name is empty', () => {
    const testValue = '';

    expect(() => nameValidation.validateSync(testValue)).toThrow(
      'The field should contain only letters.'
    );
  });

  it('returns an error if the first letter of the name is not capitalized', () => {
    const testValue = 'john';

    expect(() => nameValidation.validateSync(testValue)).toThrow(
      'The first letter must be capitalized'
    );
  });

  it('passes validation if the first letter of the name is capitalized', () => {
    const testValue = 'John';

    expect(() => nameValidation.validateSync(testValue)).not.toThrow();
  });
});
