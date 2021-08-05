/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryAtendentes
// ====================================================

export interface QueryAtendentes_atendentes_user_avatar {
  __typename: "UploadFile";
  url: string;
}

export interface QueryAtendentes_atendentes_user_institution {
  __typename: "Instituicoes";
  id: string;
  name: string;
}

export interface QueryAtendentes_atendentes_user {
  __typename: "UsersPermissionsUser";
  username: string;
  email: string;
  blocked: boolean | null;
  avatar: QueryAtendentes_atendentes_user_avatar | null;
  institution: QueryAtendentes_atendentes_user_institution | null;
}

export interface QueryAtendentes_atendentes {
  __typename: "Atendentes";
  id: string;
  name: string;
  user: QueryAtendentes_atendentes_user | null;
}

export interface QueryAtendentes {
  atendentes: QueryAtendentes_atendentes[];
}

export interface QueryAtendentesVariables {
  limit: number;
}
