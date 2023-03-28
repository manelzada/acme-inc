import styled from '@emotion/styled';

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 25rem;
  height: 30rem;
  border-radius: 4px;
  padding: 16px;
  margin: 16px;
  transition: box-shadow 0.4s;
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  }

  .top {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  .product-name {
    margin: 16px 0;
  }

  .product-description {
    font-size: 14px;
    margin: 0 0 10px 0;
    height: 5rem;
    width: 100%;
    word-wrap: break-word;
    white-space: pre-wrap;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
  }

  .product-price {
    font-weight: bold;
    font-size: 1.2em;
  }

  .product-button {
    position: relative;
    bottom: 1rem;
    background-color: #3de97e;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
    transition: transform 0.4s;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    &:hover {
      transform: scale(1.02);
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 50%;
  background-color: #f7f5f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .icon {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .icon svg {
    position: relative;
    cursor: pointer;
    top: 0;
    right: 1rem;
  }

  img {
    cursor: pointer;
    width: 80%;
    height: 80%;
    object-fit: cover;
    border-radius: 4px;
  }
`;
