export const formatToBrazilianCurrency = (value: number): string => {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export const parseCurrencyToNumber = (
  currencyString: string | null | undefined
): number => {
  if (!currencyString) {
    return 0;
  }
  let numericString = currencyString.replace(/[^0-9,.-]+/g, "");
  numericString = numericString.replace(",", ".");
  const parsedNumber = parseFloat(numericString);
  if (isNaN(parsedNumber)) {
    throw new Error(`Invalid currency format: ${currencyString}`);
  }
  return parsedNumber;
};
