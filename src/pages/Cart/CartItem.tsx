import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { IoIosRemoveCircleOutline } from 'react-icons/io';
import { useDispatch } from 'react-redux';

import { IProduct } from '../../interfaces/Product';
import { cartAction, favoriteAction } from '../../redux/actions/index.actions';
import { useAppSelector } from '../../redux/hooks';
import { ItemContainer } from './styles';

interface ICartItemProps {
  product: IProduct;
}

export function CartItem({ product }: ICartItemProps) {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();

  const { favoriteArray } = useAppSelector((state) => state.favoriteReducer);
  const { cartArray } = useAppSelector((state) => state.cartReducer);

  const removeItem = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const addItem = () => {
    setQuantity((prev) => prev + 1);
  };

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

  const deleteItem = () => {
    console.log('deleteItem');
    const newArray = cartArray.filter((item: IProduct) => item.name !== product.name);
    dispatch(cartAction(newArray));
  };

  return (
    <ItemContainer>
      <img src={product.imageUrl} alt="" />
      <div className="content" style={{ width: '80%' }}>
        <div className="content-top">
          <p>{product.name}</p>
          <div className="icons">
            <div className="icon">
              {isFavorite ? (
                <AiFillHeart style={{ color: 'red' }} onClick={handleFavorite} />
              ) : (
                <AiOutlineHeart onClick={handleFavorite} />
              )}
            </div>
            <BsTrash onClick={deleteItem} />
          </div>
        </div>
        <div className="content-bottom">
          <p>Preço: R${product.price}</p>
          <div className="quant">
            <button type="button" className="button-icon" onClick={removeItem}>
              <IoIosRemoveCircleOutline />
            </button>
            {product.quantity}
            <button type="button" className="button-icon" onClick={addItem}>
              <AiOutlinePlusCircle />
            </button>
          </div>
        </div>
      </div>
    </ItemContainer>
  );
}
