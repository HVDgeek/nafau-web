/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_TURMAS_STATUS, ENUM_ALUNOS_SEXO, ENUM_PROFESSORES_SEXO } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryTurmas
// ====================================================

export interface QueryTurmas_turmas_institution {
  __typename: "Instituicoes";
  id: string;
  name: string;
}

export interface QueryTurmas_turmas_alunos {
  __typename: "Alunos";
  id: string;
  name: string;
  sexo: ENUM_ALUNOS_SEXO;
  numero_do_BI: string | null;
  numeroDeMatricula: string | null;
  birthday: any | null;
  telefone: string | null;
}

export interface QueryTurmas_turmas_teachers_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface QueryTurmas_turmas_teachers_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: QueryTurmas_turmas_teachers_user_avatar | null;
}

export interface QueryTurmas_turmas_teachers {
  __typename: "Professores";
  id: string;
  name: string;
  sexo: ENUM_PROFESSORES_SEXO;
  numero_do_BI: string | null;
  birthday: any | null;
  telefone: string | null;
  user: QueryTurmas_turmas_teachers_user | null;
}

export interface QueryTurmas_turmas_aulas {
  __typename: "Aulas";
  id: string;
  title: string;
}

export interface QueryTurmas_turmas {
  __typename: "Turmas";
  id: string;
  title: string;
  description: string | null;
  code: string | null;
  status: ENUM_TURMAS_STATUS | null;
  institution: QueryTurmas_turmas_institution | null;
  alunos: QueryTurmas_turmas_alunos[];
  teachers: QueryTurmas_turmas_teachers[];
  aulas: QueryTurmas_turmas_aulas[];
}

export interface QueryTurmas {
  turmas: QueryTurmas_turmas[];
}

export interface QueryTurmasVariables {
  limit: number;
}
