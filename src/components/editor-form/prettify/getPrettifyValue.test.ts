import { getPrettifyValue } from './getPrettifyValue';

describe('function getPrettifyValue', () => {
  it('should add line breaks and merge the array', () => {
    expect(
      getPrettifyValue(['{', 'charatcrers', '{', '(', ')', '}', '}'])
    ).toEqual(' {\n  charatcrers {\n  }\n}\n');
  });
});
