import styled from 'styled-components';

export const PhonebookListWrap = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 20px;
`;
export const PhonebookListStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const PhonebookListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #232323;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const DeleteButton = styled.button`
  width: 50px;
  height: 30px;
  background-color: #232323;
  color: #e4e4e4;
  font-size: 14px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  outline: none;
  margin-left: 10px;
`;
