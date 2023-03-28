import styled from '@emotion/styled';

export const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justfy-content: space-between;
  width: 50%;
  height: 50%;
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);

  .icon {
    width: 100%;
    display: flex;
    justify-content: center;
    svg {
      font-size: 2rem;
    }
  }

  img {
    width: 50%;
  }

  .product-description {
    margin-top: 2rem;
    height: 10rem;
    font-size: 14px;
    margin: 0 0 10px 0;
    width: 90%;
    word-wrap: break-word;
    white-space: pre-wrap;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
  }

  .content {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .icons {
      display: flex;
      justify-content: space-between;
      width: 15%;
      align-items: center;
      font-size: 1.2rem;
    }
  }

  .button-icon {
    cursor: pointer;
    transition: 0.4s;
    border: none;
    background: none;
    font-size: 1.2rem;
  }

  .button-done {
    background: #3DE97E;
    color: #fff;
    width: 90%;
    margin-top: 1rem;
    height: 3rem;
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    transition: 0.4s;
    &:hover {
      transform: scale(1.01);
    }
`;
