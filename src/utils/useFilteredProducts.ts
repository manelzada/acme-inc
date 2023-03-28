import { useEffect, useState } from 'react';

import { IProduct } from '../interfaces/Product';

export const FilterTypes = {
  PRICE_HIGH: 'price high',
  PRICE_LOW: 'price low',
  FAVORITES: 'favorites',
  ALL: 'all',
};

export function useFilteredProducts(
  products: IProduct[] | undefined,
  search: string,
  filterType: string,
  favoriteArray: IProduct[],
): IProduct[] {
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (products) {
      let filtered = products.filter((product: IProduct) => product.name.toLowerCase().includes(search.toLowerCase()));

      if (filterType === FilterTypes.PRICE_HIGH) {
        filtered.sort((a: IProduct, b: IProduct) => b.price - a.price);
      } else if (filterType === FilterTypes.PRICE_LOW) {
        filtered.sort((a: IProduct, b: IProduct) => a.price - b.price);
      } else if (filterType === FilterTypes.FAVORITES) {
        filtered = favoriteArray;
      } else if (filterType === FilterTypes.ALL) {
        filtered = filtered.sort((a: IProduct, b: IProduct) => b.price - a.price);
      }

      setFilteredProducts(filtered);
    }
  }, [search, filterType, products, favoriteArray]);

  return filteredProducts;
}
