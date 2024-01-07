import { getFieldByKey } from './getFieldByKey';

describe('function getFieldByKey', () => {
  it('should returns the value of the given key if it exists', () => {
    const testObj = { key1: 'value1', key2: 'value2', default: 'defaultValue' };

    expect(getFieldByKey(testObj, 'key1')).toBe('value1');
    expect(getFieldByKey(testObj, 'key2')).toBe('value2');
  });

  it('should returns the value of the default key if the given key does not exist', () => {
    const testObj = { key1: 'value1', key2: 'value2', default: 'defaultValue' };

    expect(getFieldByKey(testObj, 'key3')).toBe('defaultValue');
  });

  it('should returns undefined if the given key and default key do not exist', () => {
    const testObj = { key1: 'value1', key2: 'value2' };

    expect(getFieldByKey(testObj, 'key3')).toBeUndefined();
  });
});
