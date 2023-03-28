export function generateProductPrice(name: string, description: string): number {
  const nameLength = name.split(' ').length;
  const descrLength = description.length;

  const price = 10 + nameLength * ((500 - descrLength) / (3 - nameLength));
  return price < 0 ? 0 : price;
}
