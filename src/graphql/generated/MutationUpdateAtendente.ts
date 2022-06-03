/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { updateAtendenteInput, ENUM_ATENDENTES_SEXO } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationUpdateAtendente
// ====================================================

export interface MutationUpdateAtendente_updateAtendente_atendente_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface MutationUpdateAtendente_updateAtendente_atendente_user_institution {
  __typename: "Instituicoes";
  id: string;
  name: string;
}

export interface MutationUpdateAtendente_updateAtendente_atendente_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: MutationUpdateAtendente_updateAtendente_atendente_user_avatar | null;
  institution: MutationUpdateAtendente_updateAtendente_atendente_user_institution | null;
}

export interface MutationUpdateAtendente_updateAtendente_atendente {
  __typename: "Atendentes";
  id: string;
  name: string;
  sexo: ENUM_ATENDENTES_SEXO;
  numero_do_BI: string | null;
  birthday: any | null;
  telefone: string | null;
  user: MutationUpdateAtendente_updateAtendente_atendente_user | null;
}

export interface MutationUpdateAtendente_updateAtendente {
  __typename: "updateAtendentePayload";
  atendente: MutationUpdateAtendente_updateAtendente_atendente | null;
}

export interface MutationUpdateAtendente {
  updateAtendente: MutationUpdateAtendente_updateAtendente | null;
}

export interface MutationUpdateAtendenteVariables {
  input: updateAtendenteInput;
}
