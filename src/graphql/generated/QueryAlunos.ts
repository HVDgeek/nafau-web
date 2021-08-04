/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryAlunos
// ====================================================

export interface QueryAlunos_alunos_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  url: string;
}

export interface QueryAlunos_alunos_user_institution {
  __typename: "Instituicoes";
  id: string;
  name: string;
}

export interface QueryAlunos_alunos_user {
  __typename: "UsersPermissionsUser";
  username: string;
  email: string;
  blocked: boolean | null;
  avatar: QueryAlunos_alunos_user_avatar | null;
  institution: QueryAlunos_alunos_user_institution | null;
}

export interface QueryAlunos_alunos {
  __typename: "Alunos";
  id: string;
  name: string;
  user: QueryAlunos_alunos_user | null;
}

export interface QueryAlunos {
  alunos: QueryAlunos_alunos[];
}

export interface QueryAlunosVariables {
  limit: number;
}
