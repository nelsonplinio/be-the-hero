import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

export default function SubmitButton({ children, light, style, ...rest }) {
  return (
    <Button {...rest} light={light} style={style}>
      {children}
    </Button>
  );
}

SubmitButton.propTypes = {
  children: PropTypes.func.isRequired,
  light: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SubmitButton.defaultProps = {
  style: {},
  light: false,
};
