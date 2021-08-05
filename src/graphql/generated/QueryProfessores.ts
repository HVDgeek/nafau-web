/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryProfessores
// ====================================================

export interface QueryProfessores_professores_user_avatar {
  __typename: "UploadFile";
  url: string;
}

export interface QueryProfessores_professores_user_institution {
  __typename: "Instituicoes";
  id: string;
  name: string;
}

export interface QueryProfessores_professores_user {
  __typename: "UsersPermissionsUser";
  username: string;
  email: string;
  blocked: boolean | null;
  avatar: QueryProfessores_professores_user_avatar | null;
  institution: QueryProfessores_professores_user_institution | null;
}

export interface QueryProfessores_professores {
  __typename: "Professores";
  id: string;
  name: string;
  user: QueryProfessores_professores_user | null;
}

export interface QueryProfessores {
  professores: QueryProfessores_professores[];
}

export interface QueryProfessoresVariables {
  limit: number;
}
