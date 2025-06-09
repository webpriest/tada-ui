export function formatNumber(num: number): string {
  return (num >= 1e6) ? new Intl.NumberFormat('en-NG').format(num / 1e6) + 'M' : new Intl.NumberFormat('en-NG').format(num);
}