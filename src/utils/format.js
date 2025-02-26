export function formatNumber(n) {
  return new Intl.NumberFormat("en-US").format(n);
}
export function formatFloatNumber(n, displayDecimal = 2) {
  if (typeof n === "string") n = parseFloat(n);
  if (!n) return n;
  return n % 1 === 0 ? n.toFixed(0) : n.toFixed(displayDecimal);
}
