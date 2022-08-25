import styled from '@emotion/styled';

const ModalButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 3px 16px 16px;

  > *:not(:last-child) {
    margin-right: 10px;
  }
`;

export default ModalButtonGroup;
