/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createAtendenteInput, ENUM_ATENDENTES_SEXO } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationCreateAtendente
// ====================================================

export interface MutationCreateAtendente_createAtendente_atendente_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface MutationCreateAtendente_createAtendente_atendente_user_institution {
  __typename: "Instituicoes";
  id: string;
  name: string;
}

export interface MutationCreateAtendente_createAtendente_atendente_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: MutationCreateAtendente_createAtendente_atendente_user_avatar | null;
  institution: MutationCreateAtendente_createAtendente_atendente_user_institution | null;
}

export interface MutationCreateAtendente_createAtendente_atendente {
  __typename: "Atendentes";
  id: string;
  name: string;
  sexo: ENUM_ATENDENTES_SEXO;
  numero_do_BI: string | null;
  birthday: any | null;
  telefone: string | null;
  user: MutationCreateAtendente_createAtendente_atendente_user | null;
}

export interface MutationCreateAtendente_createAtendente {
  __typename: "createAtendentePayload";
  atendente: MutationCreateAtendente_createAtendente_atendente | null;
}

export interface MutationCreateAtendente {
  createAtendente: MutationCreateAtendente_createAtendente | null;
}

export interface MutationCreateAtendenteVariables {
  input: createAtendenteInput;
}
