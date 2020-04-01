import styled, { css } from 'styled-components/native';
import { FlatList, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { lighten, darken } from 'polished';

const { width } = Dimensions.get('screen');

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

export const Message = styled.View`
  align-self: stretch;
  padding: 22px 16px;
  background: ${({ theme, me }) =>
    me ? lighten(0.1, theme.accentColor) : theme.secondaryColor};
  border-radius: 8px;
  margin-bottom: 16px;
  max-width: ${width * 0.75}px;

  ${({ me }) =>
    me &&
    css`
      margin-left: auto;
    `}
`;

export const Body = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme, me }) =>
    me ? theme.primaryTextColor : theme.secondaryTextColor};
`;
export const SendBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  height: 60px;
  flex: 1;
  color: ${({ theme }) => theme.secondaryTextColor};
  background: ${({ theme }) => theme.secondaryColor};
  border-radius: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 16px 8px;
  font-size: 18px;
`;

export const SendButton = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SendIcon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.accentColor};
`;
