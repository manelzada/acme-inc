import { ChangeEvent, useEffect, useState } from 'react';
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { IoPersonOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.png';
import { IProduct } from '../../interfaces/Product';
import { useAppSelector } from '../../redux/hooks';
import { Header } from './styles';

interface IHeaderComponentProps {
  onSearch?: (value: string) => void;
}

export function HeaderComponent({ onSearch }: IHeaderComponentProps) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [search, setSearch] = useState('');

  const { favoriteArray } = useAppSelector((state) => state.favoriteReducer);
  const { cartArray } = useAppSelector((state) => state.cartReducer);

  const navigate = useNavigate();

  useEffect(() => {
    const total = cartArray.reduce((acc: number, product: IProduct) => {
      return acc + product.price * product.quantity;
    }, 0);

    setTotalPrice(total);
  }, [cartArray]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <Header>
      <div className="logo" onClick={() => navigate('/')}>
        <img src={logo} alt="Logo" />
      </div>

      <div className="buttons">
        <button type="button" onClick={() => navigate('/')}>
          Pagina inicial
        </button>
        <button type="button" onClick={() => navigate('/cart')}>
          Carrinho
        </button>
      </div>

      <div className="search">
        <input type="text" placeholder="Buscar produto" value={search} onChange={handleChange} />
        <AiOutlineSearch />
      </div>

      <div className="end-buttons">
        <div className="account-button">
          <IoPersonOutline />
          <div>
            <p style={{ color: '#808080', fontSize: '14px' }}>Conta</p>
            <h3>Emmanoel</h3>
          </div>
        </div>
        <div className="favorite-button">
          {favoriteArray.length > 0 && <div className="badge">{favoriteArray.length}</div>}
          <AiOutlineHeart />
        </div>
        <div className="cart-button" onClick={() => navigate('/cart')}>
          <AiOutlineShoppingCart />
          <div className="price">
            <p style={{ color: '#808080' }}>Total</p>
            <h3>R$ {totalPrice}</h3>
          </div>
        </div>
      </div>
    </Header>
  );
}
