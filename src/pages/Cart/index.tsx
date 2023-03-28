import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { HeaderComponent } from '../../components/Header';
import { CircularLoading } from '../../components/Loading/Loading';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { IProduct } from '../../interfaces/Product';
import { cartAction } from '../../redux/actions/index.actions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { sleep } from '../../utils/sleep';
import { CartItem } from './CartItem';
import { Container, DoneContainer, ItemContainer, ListContainer } from './styles';

export function Cart() {
  const [search, setSearch] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  const { cartArray } = useAppSelector((state) => state.cartReducer);
  const { favoriteArray } = useAppSelector((state) => state.favoriteReducer);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSearch = (searchValue: string) => {
    setSearch(searchValue);
  };

  useEffect(() => {
    const total = cartArray.reduce((acc: number, product: IProduct) => {
      return acc + product.price * product.quantity;
    }, 0);

    setTotalPrice(total);
  }, [cartArray]);

  const checkout = async () => {
    setLoading(true);
    const userPurchase = {
      user: 'Emmanoel Silva Veiga',
      products: cartArray,
      total: totalPrice,
      userFavoriteProducts: favoriteArray,
    };

    console.log(userPurchase);
    await sleep(3000);
    alert('Compra finalizada com sucesso!');
    setLoading(false);
    dispatch(cartAction([]));
    navigate('/');
  };

  return (
    <PageContainer>
      <HeaderComponent onSearch={handleSearch} />
      <Container>
        <ListContainer>
          {cartArray.map((item: IProduct, index: number) => {
            return <CartItem key={index} product={item} />;
          })}
        </ListContainer>
        <DoneContainer className="done-container">
          Total
          {<h3>R$ {totalPrice}</h3>}
          <button type="button" onClick={checkout}>
            {loading ? <CircularLoading /> : 'Finalizar compra'}
          </button>
        </DoneContainer>
      </Container>
    </PageContainer>
  );
}
