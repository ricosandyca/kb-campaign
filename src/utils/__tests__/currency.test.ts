import { formatToIDR } from '~/utils/currency';

describe('formatToIDR function testing', () => {
  it('Should convert number to IDR format', () => {
    const format = formatToIDR(100000, false);
    expect(format).toBe('100.000');
  });

  it('Should convert number to IDR format with currency', () => {
    const format = formatToIDR('100000', true);
    // since Intl.NumberFormat returns ascii code instead of space
    // the test output should be in in ascii format as well
    // @see: https://github.com/facebook/jest/issues/9239
    expect(format).toBe('Rp\xa0100.000');
  });
});
