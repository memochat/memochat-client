import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 51px;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px 14px 18px;
`;

export const ProfileImg = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;

  background-color: ${(p) => p.theme.color.gray6};
`;
