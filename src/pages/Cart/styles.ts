import styled from '@emotion/styled';

export const DefaultPaddingContainer = styled.div`
  padding: 20px 20px 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  font-size: 1.2rem;
  overflow-y: auto;
  padding: 5px;
  svg {
    margin-bottom: 1rem;
  }
  .content {
    padding: 1rem;
  }
`;

export const ItemContainer = styled.div`
  width: 95%;
  height: 10rem;
  background: #fff;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  display: flex;

  .icons {
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    width: 15%;
    font-size: 1.5rem;
  }

  img {
    width: 20%;
    height: 100%;
  }

  .content-top,
  .content-bottom {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .quant {
    display: flex;
    width: 15%;
    font-size: 1.2rem;
    justify-content: space-between;
    align-items: center;
  }

  .button-icon {
    cursor: pointer;
    transition: 0.4s;
    border: none;
    background: none;
    font-size: 1.2rem;
  }
`;

export const DoneContainer = styled.div`
  width: 20%;
  height: 10rem;
  background: #fff;
  margin-left: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  padding: 1rem;

  h3 {
    margin-top: 1rem;
  }

  button {
    background: #3de97e;
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
  }
`;
