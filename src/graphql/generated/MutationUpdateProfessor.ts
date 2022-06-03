/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { updateProfessoreInput, ENUM_PROFESSORES_SEXO } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationUpdateProfessor
// ====================================================

export interface MutationUpdateProfessor_updateProfessore_professore_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface MutationUpdateProfessor_updateProfessore_professore_user_institution {
  __typename: "Instituicoes";
  id: string;
  name: string;
}

export interface MutationUpdateProfessor_updateProfessore_professore_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: MutationUpdateProfessor_updateProfessore_professore_user_avatar | null;
  institution: MutationUpdateProfessor_updateProfessore_professore_user_institution | null;
}

export interface MutationUpdateProfessor_updateProfessore_professore {
  __typename: "Professores";
  id: string;
  name: string;
  sexo: ENUM_PROFESSORES_SEXO;
  numero_do_BI: string | null;
  birthday: any | null;
  telefone: string | null;
  user: MutationUpdateProfessor_updateProfessore_professore_user | null;
}

export interface MutationUpdateProfessor_updateProfessore {
  __typename: "updateProfessorePayload";
  professore: MutationUpdateProfessor_updateProfessore_professore | null;
}

export interface MutationUpdateProfessor {
  updateProfessore: MutationUpdateProfessor_updateProfessore | null;
}

export interface MutationUpdateProfessorVariables {
  input: updateProfessoreInput;
}
