import React from 'react';
import PropTypes from 'prop-types';
import { useSafeArea } from 'react-native-safe-area-context';
import { Container } from './styles';

export default function SafeAreaContainer({ children }) {
  const insets = useSafeArea();
  return <Container insets={insets}>{children}</Container>;
}

SafeAreaContainer.propTypes = {
  children: PropTypes.func.isRequired,
};
