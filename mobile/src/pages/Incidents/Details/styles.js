import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
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

export const BackButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.accentColor};
`;

export const ContactContainer = styled.View`
  background: ${({ theme }) => theme.secondaryColor};
  align-self: stretch;
  margin: 8px 0;
  border-radius: 8px;
  padding: 22px 18px;
  overflow: hidden;
  flex-direction: column;
`;

export const Message = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryTextColor};
`;

export const ContactLabel = styled.Text`
  color: ${({ theme }) => theme.secondaryTextColor};
  font-size: 17px;
  margin-top: 16px;
`;

export const ActionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const ActionButton = styled(RectButton)`
  background: ${({ theme }) => theme.accentColor};
  flex: 1;
  padding: 14px 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const ActionText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: ${({ theme }) => theme.accentTextColor};
  align-self: stretch;
  text-align: center;
`;
