/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_PROFESSORES_SEXO, ENUM_TURMAS_STATUS, ENUM_ALUNOS_SEXO } from "./globalTypes";

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
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: QueryProfessores_professores_user_avatar | null;
  institution: QueryProfessores_professores_user_institution | null;
}

export interface QueryProfessores_professores_turmas_alunos_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface QueryProfessores_professores_turmas_alunos_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: QueryProfessores_professores_turmas_alunos_user_avatar | null;
}

export interface QueryProfessores_professores_turmas_alunos {
  __typename: "Alunos";
  id: string;
  name: string;
  sexo: ENUM_ALUNOS_SEXO;
  numero_do_BI: string | null;
  numeroDeMatricula: string | null;
  birthday: any | null;
  telefone: string | null;
  user: QueryProfessores_professores_turmas_alunos_user | null;
}

export interface QueryProfessores_professores_turmas_teachers_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface QueryProfessores_professores_turmas_teachers_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: QueryProfessores_professores_turmas_teachers_user_avatar | null;
}

export interface QueryProfessores_professores_turmas_teachers {
  __typename: "Professores";
  id: string;
  name: string;
  sexo: ENUM_PROFESSORES_SEXO;
  numero_do_BI: string | null;
  birthday: any | null;
  telefone: string | null;
  user: QueryProfessores_professores_turmas_teachers_user | null;
}

export interface QueryProfessores_professores_turmas_aulas {
  __typename: "Aulas";
  id: string;
  title: string;
}

export interface QueryProfessores_professores_turmas {
  __typename: "Turmas";
  id: string;
  title: string;
  description: string | null;
  code: string | null;
  status: ENUM_TURMAS_STATUS | null;
  alunos: QueryProfessores_professores_turmas_alunos[];
  teachers: QueryProfessores_professores_turmas_teachers[];
  aulas: QueryProfessores_professores_turmas_aulas[];
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
  turmas: QueryProfessores_professores_turmas[];
}

export interface QueryProfessores_professoresConnection_values {
  __typename: "Professores";
  id: string;
}

export interface QueryProfessores_professoresConnection {
  __typename: "ProfessoresConnection";
  values: (QueryProfessores_professoresConnection_values | null)[] | null;
}

export interface QueryProfessores {
  professores: QueryProfessores_professores[];
  professoresConnection: QueryProfessores_professoresConnection | null;
}

export interface QueryProfessoresVariables {
  limit: number;
  start?: number | null;
  institutionId: string;
}
