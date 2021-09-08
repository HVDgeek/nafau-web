/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_ATENDENTES_SEXO } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryAtendentes
// ====================================================

export interface QueryAtendentes_atendentes_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface QueryAtendentes_atendentes_user_institution {
  __typename: "Instituicoes";
  id: string;
  name: string;
}

export interface QueryAtendentes_atendentes_user {
  __typename: "UsersPermissionsUser";
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: QueryAtendentes_atendentes_user_avatar | null;
  institution: QueryAtendentes_atendentes_user_institution | null;
}

export interface QueryAtendentes_atendentes {
  __typename: "Atendentes";
  id: string;
  name: string;
  sexo: ENUM_ATENDENTES_SEXO;
  numero_do_BI: string | null;
  birthday: any | null;
  telefone: string | null;
  user: QueryAtendentes_atendentes_user | null;
}

export interface QueryAtendentes {
  atendentes: QueryAtendentes_atendentes[];
}

export interface QueryAtendentesVariables {
  limit: number;
}
