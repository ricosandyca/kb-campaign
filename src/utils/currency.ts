/**
 * Convert number to IDR currency
 *
 * @param n - number to convert
 * @param withCurrency - use Rp. prefix or not
 * @returns string of IDR currency format
 */
export function formatToIDR(n: number | string, withCurrency = false) {
  return new Intl.NumberFormat('id-ID', {
    style: withCurrency ? 'currency' : undefined,
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(+n);
}
