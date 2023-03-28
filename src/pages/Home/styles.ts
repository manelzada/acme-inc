import styled from '@emotion/styled';

interface FilterButtonProps {
  stroke?: boolean;
}

export const FilterButton = styled.button<FilterButtonProps>`
  background: ${({ stroke }) => (stroke ? '#fff' : '#ccc')};
  width: 10%;
  padding: 0.5rem;
  border: ${({ stroke }) => (stroke ? '1px solid #111' : 'none')};
  border-radius: 1rem;
  margin: 0.5rem;
  cursor: pointer;
`;

export const FilterSelect = styled.select<FilterButtonProps>`
  background: ${({ stroke }) => (stroke ? '#fff' : '#ccc')};
  width: 10%;
  padding: 0.5rem;
  border: ${({ stroke }) => (stroke ? '1px solid #111' : 'none')};
  border-radius: 1rem;
  margin: 0.5rem;
  cursor: pointer;
  appearance: none;

  option {
    font-size: 16px;
    padding: 5px;
    background-color: #f0f0f0;

    &:hover {
      background-color: #e0e0e0;
    }
    &:checked {
      background-color: #d0d0d0;
    }
  }
`;

export const DefaultPaddingContainer = styled.div`
  padding: 20px 20px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
