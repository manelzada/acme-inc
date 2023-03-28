import { useState } from 'react';
import { useQuery } from 'react-query';

import { HeaderComponent } from '../../components/Header';
import { HighlightProduct } from '../../components/HighlightProduct';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { ProductFilters } from '../../components/ProductFilters';
import { ProductListComponent } from '../../components/ProductList';
import { adjetivos, verbos } from '../../constants/allowWords';
import { useAppSelector } from '../../redux/hooks';
import { generateProduct } from '../../service/productAPI';
import { FilterTypes, useFilteredProducts } from '../../utils/useFilteredProducts';
import { DefaultPaddingContainer } from './styles';

export function Home() {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery(
    'products',
    () => {
      const storedProducts = sessionStorage.getItem('products');
      if (storedProducts) {
        return Promise.resolve(JSON.parse(storedProducts));
      }
      return generateProduct(verbos, adjetivos);
    },
    {
      refetchOnWindowFocus: false,
    },
  );

  const { favoriteArray } = useAppSelector((state) => state.favoriteReducer);

  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState(FilterTypes.PRICE_HIGH);

  const handleSearch = (searchValue: string) => {
    setSearch(searchValue);
  };

  const handleFilter = (newFilterType: string) => {
    setFilterType(newFilterType);
  };

  const filteredProducts = useFilteredProducts(products, search, filterType, favoriteArray);

  return (
    <PageContainer>
      <HeaderComponent onSearch={handleSearch} />
      <DefaultPaddingContainer>
        <HighlightProduct />
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error loading products.</p>}
        {!isLoading && !isError && (
          <>
            <ProductFilters filterType={filterType} handleFilter={handleFilter} />
            <ProductListComponent products={filteredProducts || []} />
          </>
        )}
      </DefaultPaddingContainer>
    </PageContainer>
  );
}
