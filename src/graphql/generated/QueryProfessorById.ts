/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_PROFESSORES_SEXO } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryProfessorById
// ====================================================

export interface QueryProfessorById_professore_user_avatar {
  __typename: "UploadFile";
  src: string;
}

export interface QueryProfessorById_professore_user {
  __typename: "UsersPermissionsUser";
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: QueryProfessorById_professore_user_avatar | null;
}

export interface QueryProfessorById_professore {
  __typename: "Professores";
  id: string;
  name: string;
  sexo: ENUM_PROFESSORES_SEXO;
  numero_do_BI: string | null;
  birthday: any | null;
  telefone: string | null;
  user: QueryProfessorById_professore_user | null;
}

export interface QueryProfessorById {
  professore: QueryProfessorById_professore | null;
}

export interface QueryProfessorByIdVariables {
  id: string;
}
