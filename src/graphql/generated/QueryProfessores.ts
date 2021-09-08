/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_PROFESSORES_SEXO } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryProfessores
// ====================================================

export interface QueryProfessores_professores_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface QueryProfessores_professores_user_institution {
  __typename: "Instituicoes";
  id: string;
  name: string;
}

export interface QueryProfessores_professores_user {
  __typename: "UsersPermissionsUser";
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: QueryProfessores_professores_user_avatar | null;
  institution: QueryProfessores_professores_user_institution | null;
}

export interface QueryProfessores_professores {
  __typename: "Professores";
  id: string;
  name: string;
  sexo: ENUM_PROFESSORES_SEXO;
  numero_do_BI: string | null;
  birthday: any | null;
  telefone: string | null;
  user: QueryProfessores_professores_user | null;
}

export interface QueryProfessores {
  professores: QueryProfessores_professores[];
}

export interface QueryProfessoresVariables {
  limit: number;
}
