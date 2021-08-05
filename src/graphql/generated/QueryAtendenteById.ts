/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_ATENDENTES_SEXO } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryAtendenteById
// ====================================================

export interface QueryAtendenteById_atendente_user_avatar {
  __typename: "UploadFile";
  src: string;
}

export interface QueryAtendenteById_atendente_user {
  __typename: "UsersPermissionsUser";
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: QueryAtendenteById_atendente_user_avatar | null;
}

export interface QueryAtendenteById_atendente {
  __typename: "Atendentes";
  id: string;
  name: string;
  sexo: ENUM_ATENDENTES_SEXO;
  numero_do_BI: string | null;
  birthday: any | null;
  telefone: string | null;
  user: QueryAtendenteById_atendente_user | null;
}

export interface QueryAtendenteById {
  atendente: QueryAtendenteById_atendente | null;
}

export interface QueryAtendenteByIdVariables {
  id: string;
}
