import { getPrettifyString } from './getPrettifyString';

describe('function getPrettifyString', () => {
  it('should return a string with line breaks', () => {
    expect(getPrettifyString('{charatcrers{}}')).toEqual(
      ' {\n  charatcrers {\n  }\n}\n'
    );
  });
});
