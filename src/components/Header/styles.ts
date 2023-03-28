import styled from '@emotion/styled';

export const Header = styled.header`
  width: 100%;
  height: 10vh;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    cursor: pointer;
  }
  .buttons {
    height: 100%;
    width: 30%;
    dislpay: flex;
    justify-content: space-between;
    align-items: center;
    button {
      cursor: pointer;
      width: 40%;
      height: 100%;
      decoration: none;
      background: none;
      font-weight: bold;
      font-size: 1.2rem;
      border: none;
      margin-right: 0.5rem;
      font-size: 1rem;
    }
  }

  .search {
    display: flex;
    align-items: center;
    width: 20%;
    height: 2.5rem;

    input {
      width: 100%;
      height: 100%;
      border-radius: 1rem;
      border: none;
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
      padding: 0 1rem;
    }

    svg {
      font-size: 1.5rem;
      position: relative;
      right: 2rem;
    }
  }

  .end-buttons {
    display: flex;
    justify-content: space-evenly;
    width: 30%;
    font-weight: bold;
  }

  .end-buttons .account-button {
    display: flex;
    cursor: pointer;
    align-items: center;
    svg {
      margin-right: 0.5rem;
      font-size: 2rem;
    }
  }

  .end-buttons .favorite-button {
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      font-size: 2rem;
    }

    .badge {
      margin-left: -0.5rem;
      width: 0.95rem;
      height: 0.95rem;
      border-radius: 50%;
      background: red;
      position: relative;
      bottom: 0.5rem;
      left: 2.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-align: center;
      color: #fff;
      font-size: 0.9rem;
    }
  }

  .end-buttons .cart-button {
    display: flex;
    align-items: center;
    cursor: pointer;
    .price {
      font-size: 14px;
    }
    svg {
      margin-right: 0.5rem;
      font-size: 3rem;
    }
  }
`;
