import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdArrowBack } from 'react-icons/md';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

import SubmitButton from '../../components/SubmitButton';

import {
  Container,
  Content,
  Section,
  Logo,
  BackLink,
  UnForm,
  UnInput,
  UnTextarea,
  FormSection,
} from './styles';

export default function NewIncident() {
  const history = useHistory();
  async function handleSubmit(data) {
    const { title, description, value } = data;
    try {
      await api.post('/incidents', {
        title,
        value,
        description,
      });
      toast.success('Caso criado com sucesso!');

      history.push('/profile');
    } catch (err) {
      toast.error('Houve um erro na criação do caso!');
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <Logo src={logo} alt="be the hero" />
          <h1>Cadastrar novo caso</h1>
          <span>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </span>

          <BackLink to="/profile">
            <MdArrowBack size={22} color="#e02041" />
            Voltar para o home
          </BackLink>
        </Section>

        <Section>
          <UnForm onSubmit={handleSubmit}>
            <UnInput name="title" placeholder="Título do caso" />
            <UnTextarea name="description" placeholder="Descrição" />
            <UnInput name="value" placeholder="Valor em reais" />
            <FormSection>
              <SubmitButton light style={{ flex: 1 }}>
                Cancelar
              </SubmitButton>
              <SubmitButton style={{ flex: 1.5, marginLeft: 8 }}>
                {' '}
                Cadastrar
              </SubmitButton>
            </FormSection>
          </UnForm>
        </Section>
      </Content>
    </Container>
  );
}
