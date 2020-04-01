import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
`;

export const TopBar = styled.View`
  align-self: stretch;

  flex-direction: row;
  align-items: center;
  padding-bottom: 8px;
`;

export const Logo = styled.Image`
  margin-left: 18px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.primaryTextColor};
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 16px;
  margin-left: 10px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.accentColor};
`;

export const List = styled(FlatList)``;

export const Chat = styled.TouchableOpacity`
  align-self: stretch;
  padding: 22px 16px;
  background: ${({ theme }) => theme.secondaryColor};
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const Name = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.secondaryTextColor};
`;
