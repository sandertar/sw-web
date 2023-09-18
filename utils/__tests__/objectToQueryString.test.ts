import { objectToQueryString } from '../objectToQueryString';

describe('objectToQueryString', () => {
  it('should return a query string', () => {
    const params = {
      name: 'John',
      age: 30,
      height: undefined,
      weight: '',
    };
    expect(objectToQueryString(params)).toBe('?name=John&age=30');
  });
});
