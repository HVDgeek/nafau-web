/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { deleteAtendenteInput, ENUM_ATENDENTES_SEXO } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationDeleteAtendente
// ====================================================

export interface MutationDeleteAtendente_deleteAtendente_atendente_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface MutationDeleteAtendente_deleteAtendente_atendente_user_institution {
  __typename: "Instituicoes";
  id: string;
  name: string;
}

export interface MutationDeleteAtendente_deleteAtendente_atendente_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: MutationDeleteAtendente_deleteAtendente_atendente_user_avatar | null;
  institution: MutationDeleteAtendente_deleteAtendente_atendente_user_institution | null;
}

export interface MutationDeleteAtendente_deleteAtendente_atendente {
  __typename: "Atendentes";
  id: string;
  name: string;
  sexo: ENUM_ATENDENTES_SEXO;
  numero_do_BI: string | null;
  birthday: any | null;
  telefone: string | null;
  user: MutationDeleteAtendente_deleteAtendente_atendente_user | null;
}

export interface MutationDeleteAtendente_deleteAtendente {
  __typename: "deleteAtendentePayload";
  atendente: MutationDeleteAtendente_deleteAtendente_atendente | null;
}

export interface MutationDeleteAtendente {
  deleteAtendente: MutationDeleteAtendente_deleteAtendente | null;
}

export interface MutationDeleteAtendenteVariables {
  input: deleteAtendenteInput;
}
