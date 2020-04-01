import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Header,
  TextContainer,
  Label,
  Value,
  Separator,
  ActionButton,
  ActionText,
  ActionIcon,
} from './styles';

export default function Incident({ data, showDetail, onDetalClick }) {
  const valueFormatted = useMemo(
    () =>
      Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }).format(data.value),
    [data]
  );
  return (
    <Container>
      <Header>
        <TextContainer>
          <Label>CASO:</Label>
          <Value>{data.title}</Value>
        </TextContainer>
        <TextContainer style={{ maxWidth: 90 }}>
          <Label>ONG:</Label>
          <Value>{data.name}</Value>
        </TextContainer>
      </Header>

      {showDetail && (
        <TextContainer>
          <Label>Description:</Label>
          <Value>{data.description}</Value>
        </TextContainer>
      )}

      <TextContainer>
        <Label>Valor:</Label>
        <Value>{valueFormatted} reais</Value>
      </TextContainer>

      {!showDetail && (
        <>
          <Separator />

          <ActionButton onPress={onDetalClick}>
            <ActionText>Ver mais detalhes</ActionText>
            <ActionIcon name="arrow-forward" />
          </ActionButton>
        </>
      )}
    </Container>
  );
}

Incident.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    email: PropTypes.string,
    whatsapp: PropTypes.string,
    city: PropTypes.string,
    uf: PropTypes.string,
  }).isRequired,
  showDetail: PropTypes.bool,
  onDetalClick: PropTypes.func,
};

Incident.defaultProps = {
  showDetail: false,
  onDetalClick: null,
};
