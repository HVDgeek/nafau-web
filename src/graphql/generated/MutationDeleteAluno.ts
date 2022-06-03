/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { deleteAlunoInput, ENUM_ALUNOS_SEXO } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationDeleteAluno
// ====================================================

export interface MutationDeleteAluno_deleteAluno_aluno_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface MutationDeleteAluno_deleteAluno_aluno_user_institution {
  __typename: "Instituicoes";
  id: string;
  name: string;
}

export interface MutationDeleteAluno_deleteAluno_aluno_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: MutationDeleteAluno_deleteAluno_aluno_user_avatar | null;
  institution: MutationDeleteAluno_deleteAluno_aluno_user_institution | null;
}

export interface MutationDeleteAluno_deleteAluno_aluno {
  __typename: "Alunos";
  id: string;
  name: string;
  sexo: ENUM_ALUNOS_SEXO;
  numero_do_BI: string | null;
  numeroDeMatricula: string | null;
  birthday: any | null;
  telefone: string | null;
  user: MutationDeleteAluno_deleteAluno_aluno_user | null;
}

export interface MutationDeleteAluno_deleteAluno {
  __typename: "deleteAlunoPayload";
  aluno: MutationDeleteAluno_deleteAluno_aluno | null;
}

export interface MutationDeleteAluno {
  deleteAluno: MutationDeleteAluno_deleteAluno | null;
}

export interface MutationDeleteAlunoVariables {
  input: deleteAlunoInput;
}
