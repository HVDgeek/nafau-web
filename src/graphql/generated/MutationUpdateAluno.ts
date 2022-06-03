/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { updateAlunoInput, ENUM_ALUNOS_SEXO } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationUpdateAluno
// ====================================================

export interface MutationUpdateAluno_updateAluno_aluno_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface MutationUpdateAluno_updateAluno_aluno_user_institution {
  __typename: "Instituicoes";
  id: string;
  name: string;
}

export interface MutationUpdateAluno_updateAluno_aluno_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: MutationUpdateAluno_updateAluno_aluno_user_avatar | null;
  institution: MutationUpdateAluno_updateAluno_aluno_user_institution | null;
}

export interface MutationUpdateAluno_updateAluno_aluno {
  __typename: "Alunos";
  id: string;
  name: string;
  sexo: ENUM_ALUNOS_SEXO;
  numero_do_BI: string | null;
  numeroDeMatricula: string | null;
  birthday: any | null;
  telefone: string | null;
  user: MutationUpdateAluno_updateAluno_aluno_user | null;
}

export interface MutationUpdateAluno_updateAluno {
  __typename: "updateAlunoPayload";
  aluno: MutationUpdateAluno_updateAluno_aluno | null;
}

export interface MutationUpdateAluno {
  updateAluno: MutationUpdateAluno_updateAluno | null;
}

export interface MutationUpdateAlunoVariables {
  input: updateAlunoInput;
}
