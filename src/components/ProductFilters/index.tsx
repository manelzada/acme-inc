import { AiOutlineUnorderedList } from 'react-icons/ai';
import { IoChevronDownSharp, IoChevronUpSharp } from 'react-icons/io5';

import { FilterButton, FilterSelect } from '../../pages/Home/styles';

interface IProductFiltersProps {
  filterType: string;
  handleFilter: (filterType: string) => void;
}

export const ProductFilters = ({ filterType, handleFilter }: IProductFiltersProps) => {
  return (
    <div style={{ width: '90%', marginTop: '5rem', display: 'flex', height: '3rem' }}>
      {filterType === 'price high' ? (
        <FilterButton onClick={() => handleFilter('price low')}>
          Preço <IoChevronUpSharp />
        </FilterButton>
      ) : (
        <FilterButton onClick={() => handleFilter('price high')}>
          Preço <IoChevronDownSharp />
        </FilterButton>
      )}
      <FilterSelect stroke={true} onChange={(e) => handleFilter(e.target.value)}>
        <option value="" disabled selected>
          Filtrar por <AiOutlineUnorderedList />
        </option>
        <option value="all">Todos</option>
        <option value="favorites">Favoritos</option>
      </FilterSelect>
    </div>
  );
};
