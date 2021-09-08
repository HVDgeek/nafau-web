import { gql } from '@apollo/client'

export const AlunoFragment = gql`
  fragment AlunoFragment on Alunos {
    id
    name
    sexo
    numero_do_BI
    numeroDeMatricula
    birthday
    telefone
  }
`

export const ProfessorFragment = gql`
  fragment ProfessorFragment on Professores {
    id
    name
    sexo
    numero_do_BI
    birthday
    telefone
  }
`

export const AtendenteFragment = gql`
  fragment AtendenteFragment on Atendentes {
    id
    name
    sexo
    numero_do_BI
    birthday
    telefone
  }
`
