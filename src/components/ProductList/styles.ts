import styled from '@emotion/styled';

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;
