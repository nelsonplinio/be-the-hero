import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.primaryColor};

  padding: ${({ insets }) =>
    insets && `${insets.top + 16}px 16px ${insets.bottom}px`};
`;
