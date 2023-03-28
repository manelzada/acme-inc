interface IProductCardProps {
  product: IProduct;
}

import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import { IProduct } from '../../interfaces/Product';
import { cartAction, favoriteAction } from '../../redux/actions/index.actions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ImageContainer, ProductCardContainer } from './styles';

export function ProductCard({ product }: IProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { favoriteArray } = useAppSelector((state) => state.favoriteReducer);
  const { cartArray } = useAppSelector((state) => state.cartReducer);

  const handleFavorite = () => {
    setIsFavorite((prevState) => {
      // Atualiza o estado isFavorite
      const newIsFavorite = !prevState;

      if (newIsFavorite) {
        dispatch(favoriteAction([...favoriteArray, product]));
      } else {
        const newArray = favoriteArray.filter((item: IProduct) => item.name !== product.name);
        dispatch(favoriteAction(newArray));
      }

      // Retorna o novo estado
      return newIsFavorite;
    });
  };

  const addToCart = () => {
    const existingProductIndex = cartArray.findIndex((cartItem: IProduct) => cartItem.name === product.name);

    if (existingProductIndex !== -1) {
      const updatedCartArray = [...cartArray];
      updatedCartArray[existingProductIndex].quantity += 1;

      dispatch(cartAction(updatedCartArray));
    } else {
      const newProduct = { ...product, quantity: 1 };
      dispatch(cartAction([...cartArray, newProduct]));
    }
  };

  return (
    <ProductCardContainer>
      <ImageContainer>
        <div className="icon">
          {isFavorite ? (
            <AiFillHeart style={{ color: 'red' }} onClick={handleFavorite} />
          ) : (
            <AiOutlineHeart onClick={handleFavorite} />
          )}
        </div>
        <img
          src={product.imageUrl}
          alt="Random Product"
          className="product-image"
          onClick={() => navigate(`/product/${product.name}`)}
        />
      </ImageContainer>
      <div className="top" onClick={() => navigate(`/product/${product.name}`)}>
        <h2 className="product-name">{product.name}</h2>
        <div className="price">
          <p>${product.price}</p>
        </div>
      </div>
      <div className="product-description">
        <p>{product.description}</p>
      </div>
      <button className="product-button" onClick={addToCart}>
        Adicionar ao carrinho
      </button>
    </ProductCardContainer>
  );
}
