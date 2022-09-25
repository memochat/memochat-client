import styled from '@emotion/styled';

import { ModalContents as ModalContentsComponent } from '../Modal';

export const ModalContents = styled(ModalContentsComponent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 27px 16px;
`;

export const Title = styled.strong`
  ${(p) => p.theme.typography.h2};
  color: ${(p) => p.theme.color.black1};
  text-align: center;
  white-space: pre-wrap;
`;

export const Description = styled.p`
  ${(p) => p.theme.typography.body4};
  color: ${(p) => p.theme.color.gray1};
  margin-top: 6px;
  text-align: center;
  white-space: pre-wrap;
`;
