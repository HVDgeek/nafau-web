/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createAlunoInput, ENUM_ALUNOS_SEXO } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationCreateAluno
// ====================================================

export interface MutationCreateAluno_createAluno_aluno_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface MutationCreateAluno_createAluno_aluno_user_institution {
  __typename: "Instituicoes";
  id: string;
  name: string;
}

export interface MutationCreateAluno_createAluno_aluno_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: MutationCreateAluno_createAluno_aluno_user_avatar | null;
  institution: MutationCreateAluno_createAluno_aluno_user_institution | null;
}

export interface MutationCreateAluno_createAluno_aluno {
  __typename: "Alunos";
  id: string;
  name: string;
  sexo: ENUM_ALUNOS_SEXO;
  numero_do_BI: string | null;
  numeroDeMatricula: string | null;
  birthday: any | null;
  telefone: string | null;
  user: MutationCreateAluno_createAluno_aluno_user | null;
}

export interface MutationCreateAluno_createAluno {
  __typename: "createAlunoPayload";
  aluno: MutationCreateAluno_createAluno_aluno | null;
}

export interface MutationCreateAluno {
  createAluno: MutationCreateAluno_createAluno | null;
}

export interface MutationCreateAlunoVariables {
  input: createAlunoInput;
}
