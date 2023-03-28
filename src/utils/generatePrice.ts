export function generateProductPrice(name: string, description: string): number {
  const nameLength = name.split(' ').length;
  const descrLength = description.length;

  if (3 - nameLength === 0) {
    return 0;
  }

  const price = 10 + nameLength * ((500 - descrLength) / (3 - nameLength));
  return price < 0 ? 0 : price;
}
