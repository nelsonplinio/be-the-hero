import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  /* align-items: center; */
  justify-content: space-between;
  flex: 1;
`;

export const TopBar = styled.View`
  align-self: stretch;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image``;

export const TotalIncidentsText = styled.Text`
  color: ${({ theme }) => theme.secondaryTextColor};
  font-weight: bold;
  font-size: 16px;
`;

export const GreetingContainer = styled.View`
  align-self: stretch;
  margin-top: 16px;
`;

export const GreetingText = styled.Text`
  align-self: stretch;
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryTextColor};
`;

export const ExplanationText = styled.Text`
  align-self: stretch;
  margin-top: 16px;

  color: #666;
  font-size: 19px;
  line-height: 22px;
`;

export const List = styled(FlatList)`
  flex: 1;
`;

export const Right = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ThemeToggle = styled.TouchableOpacity`
  height: 26px;
  width: 26px;
  margin-left: 16px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(FontAwesome)`
  color: ${({ theme }) => theme.toggleIcon};
`;
