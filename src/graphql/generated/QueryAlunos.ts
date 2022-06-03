/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_ALUNOS_SEXO, ENUM_TURMAS_STATUS, ENUM_PROFESSORES_SEXO } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryAlunos
// ====================================================

export interface QueryAlunos_alunos_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface QueryAlunos_alunos_user_institution {
  __typename: "Instituicoes";
  id: string;
  name: string;
}

export interface QueryAlunos_alunos_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: QueryAlunos_alunos_user_avatar | null;
  institution: QueryAlunos_alunos_user_institution | null;
}

export interface QueryAlunos_alunos_turmas_alunos_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface QueryAlunos_alunos_turmas_alunos_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: QueryAlunos_alunos_turmas_alunos_user_avatar | null;
}

export interface QueryAlunos_alunos_turmas_alunos {
  __typename: "Alunos";
  id: string;
  name: string;
  sexo: ENUM_ALUNOS_SEXO;
  numero_do_BI: string | null;
  numeroDeMatricula: string | null;
  birthday: any | null;
  telefone: string | null;
  user: QueryAlunos_alunos_turmas_alunos_user | null;
}

export interface QueryAlunos_alunos_turmas_teachers_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface QueryAlunos_alunos_turmas_teachers_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: QueryAlunos_alunos_turmas_teachers_user_avatar | null;
}

export interface QueryAlunos_alunos_turmas_teachers {
  __typename: "Professores";
  id: string;
  name: string;
  sexo: ENUM_PROFESSORES_SEXO;
  numero_do_BI: string | null;
  birthday: any | null;
  telefone: string | null;
  user: QueryAlunos_alunos_turmas_teachers_user | null;
}

export interface QueryAlunos_alunos_turmas_aulas {
  __typename: "Aulas";
  id: string;
  title: string;
}

export interface QueryAlunos_alunos_turmas {
  __typename: "Turmas";
  id: string;
  title: string;
  description: string | null;
  code: string | null;
  status: ENUM_TURMAS_STATUS | null;
  alunos: QueryAlunos_alunos_turmas_alunos[];
  teachers: QueryAlunos_alunos_turmas_teachers[];
  aulas: QueryAlunos_alunos_turmas_aulas[];
}

export interface QueryAlunos_alunos {
  __typename: "Alunos";
  id: string;
  name: string;
  sexo: ENUM_ALUNOS_SEXO;
  numero_do_BI: string | null;
  numeroDeMatricula: string | null;
  birthday: any | null;
  telefone: string | null;
  user: QueryAlunos_alunos_user | null;
  turmas: QueryAlunos_alunos_turmas[];
}

export interface QueryAlunos_alunosConnection_values {
  __typename: "Alunos";
  id: string;
}

export interface QueryAlunos_alunosConnection {
  __typename: "AlunosConnection";
  values: (QueryAlunos_alunosConnection_values | null)[] | null;
}

export interface QueryAlunos {
  alunos: QueryAlunos_alunos[];
  alunosConnection: QueryAlunos_alunosConnection | null;
}

export interface QueryAlunosVariables {
  limit: number;
  start?: number | null;
  institutionId: string;
}
