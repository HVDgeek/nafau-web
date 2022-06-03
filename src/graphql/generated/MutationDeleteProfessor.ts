/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { deleteProfessoreInput, ENUM_PROFESSORES_SEXO } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationDeleteProfessor
// ====================================================

export interface MutationDeleteProfessor_deleteProfessore_professore_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface MutationDeleteProfessor_deleteProfessore_professore_user_institution {
  __typename: "Instituicoes";
  id: string;
  name: string;
}

export interface MutationDeleteProfessor_deleteProfessore_professore_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: MutationDeleteProfessor_deleteProfessore_professore_user_avatar | null;
  institution: MutationDeleteProfessor_deleteProfessore_professore_user_institution | null;
}

export interface MutationDeleteProfessor_deleteProfessore_professore {
  __typename: "Professores";
  id: string;
  name: string;
  sexo: ENUM_PROFESSORES_SEXO;
  numero_do_BI: string | null;
  birthday: any | null;
  telefone: string | null;
  user: MutationDeleteProfessor_deleteProfessore_professore_user | null;
}

export interface MutationDeleteProfessor_deleteProfessore {
  __typename: "deleteProfessorePayload";
  professore: MutationDeleteProfessor_deleteProfessore_professore | null;
}

export interface MutationDeleteProfessor {
  deleteProfessore: MutationDeleteProfessor_deleteProfessore | null;
}

export interface MutationDeleteProfessorVariables {
  input: deleteProfessoreInput;
}
