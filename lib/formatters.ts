const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

export function formatCurrency(value: number) {
  return currencyFormatter.format(value);
}

export function formatQuantity(value: number, unit: string) {
  return `${value.toLocaleString()} ${unit}`;
}
