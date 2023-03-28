import { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart, AiOutlinePlusCircle } from 'react-icons/ai';
import { IoIosRemoveCircleOutline } from 'react-icons/io';
import { useParams } from 'react-router-dom';

import { HeaderComponent } from '../../components/Header';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { IProduct } from '../../interfaces/Product';
import { cartAction, favoriteAction } from '../../redux/actions/index.actions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Container, ProductContainer } from './styles';

export default function Product() {
  const { name } = useParams<{ name: string }>();
  const [product, setProduct] = useState<IProduct>();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const { favoriteArray } = useAppSelector((state) => state.favoriteReducer);
  const { cartArray } = useAppSelector((state) => state.cartReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (name) {
      const decodedName = decodeURIComponent(name.replace(/\+/g, ' '));
      const product = JSON.parse(sessionStorage.getItem('products') || '[]').find(
        (product: IProduct) => product.name === decodedName,
      );
      console.log('decoded: ', decodedName);
      console.log('product: ', product);
      setProduct(product);
    }
  }, []);

  const handleFavorite = () => {
    setIsFavorite((prevState) => {
      // Atualiza o estado isFavorite
      const newIsFavorite = !prevState;

      if (newIsFavorite) {
        dispatch(favoriteAction([...favoriteArray, product]));
      } else {
        const newArray = favoriteArray.filter((item: IProduct) => item.name !== product?.name);
        dispatch(favoriteAction(newArray));
      }

      // Retorna o novo estado
      return newIsFavorite;
    });
  };

  const removeItem = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const addItem = () => {
    setQuantity((prev) => prev + 1);
  };

  const addToCart = () => {
    const productIndex = cartArray.findIndex((cartItem: IProduct) => cartItem.name === product?.name);

    if (productIndex !== -1) {
      const updatedCartArray = [...cartArray];
      updatedCartArray[productIndex].quantity += quantity;
      dispatch(cartAction(updatedCartArray));
    } else {
      dispatch(
        cartAction([
          ...cartArray,
          {
            name: product?.name,
            description: product?.description,
            price: product?.price,
            imageUrl: product?.imageUrl,
            quantity: quantity,
          },
        ]),
      );
    }
  };

  return (
    <PageContainer>
      <HeaderComponent />
      <ProductContainer>
        <Container>
          {/* <div className="imagem"></div> */}
          <img src={product?.imageUrl} alt="" />

          <div className="content">
            <div>
              <div className="icon">
                {isFavorite ? (
                  <AiFillHeart style={{ color: 'red' }} onClick={handleFavorite} />
                ) : (
                  <AiOutlineHeart onClick={handleFavorite} />
                )}
              </div>
              <h1>{product?.name}</h1>
              <p>Preço: R${product?.price} </p>
              <div className="product-description">
                <p>Descrição: {product?.description}</p>
              </div>
            </div>
            <div className="button">
              <div className="icons">
                <button type="button" className="button-icon" onClick={removeItem}>
                  <IoIosRemoveCircleOutline />
                </button>
                {quantity}
                <button type="button" className="button-icon" onClick={addItem}>
                  <AiOutlinePlusCircle />
                </button>
              </div>
              <button type="button" className="button-done" onClick={addToCart}>
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </Container>
      </ProductContainer>
    </PageContainer>
  );
}
