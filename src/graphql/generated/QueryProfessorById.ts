/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_PROFESSORES_SEXO, ENUM_TURMAS_STATUS, ENUM_ALUNOS_SEXO } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryProfessorById
// ====================================================

export interface QueryProfessorById_professore_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface QueryProfessorById_professore_user_institution {
  __typename: "Instituicoes";
  id: string;
  name: string;
}

export interface QueryProfessorById_professore_user_profile {
  __typename: "Perfis";
  id: string;
  name: string;
}

export interface QueryProfessorById_professore_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: QueryProfessorById_professore_user_avatar | null;
  institution: QueryProfessorById_professore_user_institution | null;
  profile: QueryProfessorById_professore_user_profile | null;
}

export interface QueryProfessorById_professore_turmas_alunos_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface QueryProfessorById_professore_turmas_alunos_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: QueryProfessorById_professore_turmas_alunos_user_avatar | null;
}

export interface QueryProfessorById_professore_turmas_alunos {
  __typename: "Alunos";
  id: string;
  name: string;
  sexo: ENUM_ALUNOS_SEXO;
  numero_do_BI: string | null;
  numeroDeMatricula: string | null;
  birthday: any | null;
  telefone: string | null;
  user: QueryProfessorById_professore_turmas_alunos_user | null;
}

export interface QueryProfessorById_professore_turmas_teachers_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface QueryProfessorById_professore_turmas_teachers_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: QueryProfessorById_professore_turmas_teachers_user_avatar | null;
}

export interface QueryProfessorById_professore_turmas_teachers {
  __typename: "Professores";
  id: string;
  name: string;
  sexo: ENUM_PROFESSORES_SEXO;
  numero_do_BI: string | null;
  birthday: any | null;
  telefone: string | null;
  user: QueryProfessorById_professore_turmas_teachers_user | null;
}

export interface QueryProfessorById_professore_turmas_aulas {
  __typename: "Aulas";
  id: string;
  title: string;
}

export interface QueryProfessorById_professore_turmas {
  __typename: "Turmas";
  id: string;
  title: string;
  description: string | null;
  code: string | null;
  status: ENUM_TURMAS_STATUS | null;
  alunos: QueryProfessorById_professore_turmas_alunos[];
  teachers: QueryProfessorById_professore_turmas_teachers[];
  aulas: QueryProfessorById_professore_turmas_aulas[];
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
  turmas: QueryProfessorById_professore_turmas[];
}

export interface QueryProfessorById {
  professore: QueryProfessorById_professore | null;
}

export interface QueryProfessorByIdVariables {
  id: string;
}
