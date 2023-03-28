import { generateProductPrice } from '../utils/generatePrice';
import { generateProductName } from '../utils/generateProductName';
import { generateRandomDescription } from '../utils/generateRandomDescription';

async function fetchImageList(size: number) {
  const response = await fetch(`https://picsum.photos/v2/list?page=2&limit=${size}`);

  if (!response.ok) return [];

  return await response.json();
}

export async function generateProduct(verbos: string[], adjetivos: string[]) {
  const productsCount = Math.min(verbos.length, adjetivos.length);
  const imageListData = await fetchImageList(productsCount);

  const products = imageListData.map((imageData: any, index: number) => {
    const { name, newVerbos, newAdjetivos } = generateProductName(verbos, adjetivos);
    verbos = newVerbos;
    adjetivos = newAdjetivos;

    const description = generateRandomDescription();
    const price = generateProductPrice(name, description);

    return {
      name,
      description,
      price,
      imageUrl: imageData.download_url,
    };
  });
  sessionStorage.setItem('products', JSON.stringify(products));

  return products;
}
