import { shallowNavigate } from '../shallowNavigate';

describe('shallowNavigate', () => {
  beforeEach(() => {
    window.history.pushState = jest.fn();
  });
  it('should update the URL without reloading the page', () => {
    const pathname = '/search';
    const params = {
      name: 'John',
      age: 30,
      height: undefined,
      weight: '',
    };
    shallowNavigate(pathname, params);
    expect(window.history.pushState).toHaveBeenCalledWith({}, '', `${pathname}?name=John&age=30`);
  });
});
