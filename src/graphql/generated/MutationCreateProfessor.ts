/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createProfessoreInput, ENUM_PROFESSORES_SEXO } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationCreateProfessor
// ====================================================

export interface MutationCreateProfessor_createProfessore_professore_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface MutationCreateProfessor_createProfessore_professore_user_institution {
  __typename: "Instituicoes";
  id: string;
  name: string;
}

export interface MutationCreateProfessor_createProfessore_professore_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: MutationCreateProfessor_createProfessore_professore_user_avatar | null;
  institution: MutationCreateProfessor_createProfessore_professore_user_institution | null;
}

export interface MutationCreateProfessor_createProfessore_professore {
  __typename: "Professores";
  id: string;
  name: string;
  sexo: ENUM_PROFESSORES_SEXO;
  numero_do_BI: string | null;
  birthday: any | null;
  telefone: string | null;
  user: MutationCreateProfessor_createProfessore_professore_user | null;
}

export interface MutationCreateProfessor_createProfessore {
  __typename: "createProfessorePayload";
  professore: MutationCreateProfessor_createProfessore_professore | null;
}

export interface MutationCreateProfessor {
  createProfessore: MutationCreateProfessor_createProfessore | null;
}

export interface MutationCreateProfessorVariables {
  input: createProfessoreInput;
}
