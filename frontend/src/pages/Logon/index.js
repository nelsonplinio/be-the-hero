import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import hero from '../../assets/heroes.png';

import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';

import {
  Container,
  Section,
  ImgHero,
  Logo,
  UnForm,
  Label,
  SignUpLink,
} from './styles';

export default function Logon() {
  const formRef = useRef(null);
  const history = useHistory();

  async function handleSubmit(data) {
    const { ong_id: id } = data;

    try {
      const response = await api.post('/sessions', { id });

      toast.success('ONG cadastrada com sucesso, seu ID foi copiado!');

      localStorage.setItem('ongID', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (error) {
      toast.error('Houve um erro no login tente novamente.');
    }
  }
  return (
    <Container>
      <Section>
        <Logo src={logo} />
        <UnForm ref={formRef} onSubmit={handleSubmit}>
          <Label>Faça seu logon</Label>
          <Input name="ong_id" placeholder="Sua ID" />
          <SubmitButton>Entrar</SubmitButton>
        </UnForm>
        <SignUpLink to="/register">Não tenho cadastro</SignUpLink>
      </Section>
      <ImgHero src={hero} alt="hero" />
    </Container>
  );
}
