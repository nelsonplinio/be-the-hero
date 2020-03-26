import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import copy from 'copy-to-clipboard';

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
  FormSection,
  OngID,
} from './styles';

export default function Register() {
  const formRef = useRef(null);

  const [id, setID] = useState(null);

  async function handleSubmit(data) {
    const { name, email, whatsapp, city, uf } = data;

    try {
      const response = await api.post('/ongs', {
        name,
        email,
        whatsapp,
        city,
        uf,
      });

      toast.success('ONG cadastrada com sucesso, seu ID foi copiado!');

      setID(response.data.id);
      copy(response.data.id);

      formRef.current.reset();
    } catch (error) {
      toast.error('Houve um erro na tentativa de cadastro.');
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <Logo src={logo} alt="be the hero" />
          <h1>Cadastro</h1>
          <span>
            Faça seu cadastro, entre na plataforma e ajude pessoas e encontrem
            os casos da sua ONG.
          </span>

          <BackLink to="/">
            <MdArrowBack size={22} color="#e02041" />
            Voltar para o logon
          </BackLink>
        </Section>

        <Section>
          <UnForm ref={formRef} onSubmit={handleSubmit}>
            <UnInput name="name" required placeholder="Nome da ONG" />
            <UnInput name="email" required email placeholder="E-mail" />
            <UnInput name="whatsapp" required placeholder="Whatsapp" />
            <FormSection>
              <UnInput
                name="city"
                placeholder="Cidade"
                style={{ flex: 5, marginRight: 8 }}
              />
              <UnInput name="uf" placeholder="UF" style={{ flex: 1 }} />
            </FormSection>
            <SubmitButton>Cadastrar</SubmitButton>
          </UnForm>

          <OngID show={!!id}>
            <span>Utilize seu ID para entrar no sistema</span>
            SEU ID: {id}
          </OngID>
        </Section>
      </Content>
    </Container>
  );
}
