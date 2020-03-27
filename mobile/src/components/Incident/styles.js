import styled from 'styled-components/native';

import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  background: ${({ theme }) => theme.secondaryColor};
  align-self: stretch;
  margin: 8px 0;
  border-radius: 8px;
  padding: 22px 18px;
  overflow: hidden;
  flex-direction: column;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextContainer = styled.View`
  flex-direction: column;
  margin-top: 12px;
`;

export const Label = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: ${({ theme }) => theme.primaryTextColor};
`;

export const Value = styled.Text`
  color: ${({ theme }) => theme.secondaryTextColor};
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
`;

export const Separator = styled.View`
  align-self: stretch;
  margin: 16px 8px;
  height: 2px;
  background: ${({ theme }) => theme.secondaryTextColor};
`;

export const ActionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
`;

export const ActionText = styled.Text`
  color: ${({ theme }) => theme.accentColor};
  font-size: 16px;
  font-weight: bold;
`;

export const ActionIcon = styled(MaterialIcons).attrs({
  size: 22,
})`
  color: ${({ theme }) => theme.accentColor};
`;
