import { IProduct } from '../../interfaces/Product';
import { ProductCard } from '../ProductCard';
import { ProductList } from './styles';

interface IProductListComponentProps {
  products: IProduct[];
}

export function ProductListComponent({ products }: IProductListComponentProps) {
  return (
    <div style={{ marginTop: '5rem' }}>
      <h1>Produtos</h1>
      <ProductList>
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </ProductList>
    </div>
  );
}
