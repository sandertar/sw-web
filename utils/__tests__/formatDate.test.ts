import { formatDate } from '../formatDate';

describe('formatDate', () => {
  it('should return a formatted date DD/MM/YYYY HH:MM', () => {
    const date = '2014-12-09T13:50:51.644000Z';
    expect(formatDate(date)).toBe('09/12/2014 14:50');
  });
});
