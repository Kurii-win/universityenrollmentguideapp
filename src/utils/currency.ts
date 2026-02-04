// Currency conversion rates (base: THB - Thai Baht)
export const currencyRates: { [key: string]: number } = {
  THB: 1,
  USD: 0.029,
  GBP: 0.023,
  EUR: 0.027,
  JPY: 4.3,
  SGD: 0.039,
  AUD: 0.045,
  CAD: 0.040,
  CNY: 0.21,
  KRW: 40.5,
  MYR: 0.13
};

export const currencySymbols: { [key: string]: string } = {
  THB: '฿',
  USD: '$',
  GBP: '£',
  EUR: '€',
  JPY: '¥',
  SGD: 'S$',
  AUD: 'A$',
  CAD: 'C$',
  CNY: '¥',
  KRW: '₩',
  MYR: 'RM'
};

export const currencies = [
  { code: 'THB', name: 'Thai Baht' },
  { code: 'USD', name: 'US Dollar' },
  { code: 'GBP', name: 'British Pound' },
  { code: 'EUR', name: 'Euro' },
  { code: 'JPY', name: 'Japanese Yen' },
  { code: 'SGD', name: 'Singapore Dollar' },
  { code: 'AUD', name: 'Australian Dollar' },
  { code: 'CAD', name: 'Canadian Dollar' },
  { code: 'CNY', name: 'Chinese Yuan' },
  { code: 'KRW', name: 'South Korean Won' },
  { code: 'MYR', name: 'Malaysian Ringgit' }
];

export function convertTuitionRange(tuitionRange: string, targetCurrency: string): string {
  // Extract numbers from the tuition range string
  const numbers = tuitionRange.match(/[\d,]+/g);
  
  if (!numbers || numbers.length === 0) {
    return tuitionRange;
  }

  const rate = currencyRates[targetCurrency];
  const symbol = currencySymbols[targetCurrency];

  if (!rate || !symbol) {
    return tuitionRange;
  }

  // Convert each number found
  const convertedNumbers = numbers.map(numStr => {
    const num = parseFloat(numStr.replace(/,/g, ''));
    const converted = num * rate;
    
    // Format based on currency
    if (targetCurrency === 'JPY' || targetCurrency === 'KRW') {
      // No decimals for JPY and KRW
      return Math.round(converted).toLocaleString();
    } else {
      // Round to nearest thousand for cleaner display
      return Math.round(converted / 1000) * 1000;
    }
  });

  // Reconstruct the range string
  if (convertedNumbers.length === 2) {
    const num1 = convertedNumbers[0];
    const num2 = convertedNumbers[1];
    
    if (targetCurrency === 'JPY' || targetCurrency === 'KRW') {
      return `${symbol}${num1} - ${symbol}${num2}`;
    } else {
      return `${symbol}${num1.toLocaleString()} - ${symbol}${num2.toLocaleString()}`;
    }
  } else if (convertedNumbers.length === 1) {
    const num = convertedNumbers[0];
    if (targetCurrency === 'JPY' || targetCurrency === 'KRW') {
      return `${symbol}${num}`;
    } else {
      return `${symbol}${num.toLocaleString()}`;
    }
  }

  return tuitionRange;
}
