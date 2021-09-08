/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_TURMAS_STATUS, ENUM_ALUNOS_SEXO, ENUM_PROFESSORES_SEXO } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryTurmaById
// ====================================================

export interface QueryTurmaById_turma_institution {
  __typename: "Instituicoes";
  id: string;
  name: string;
}

export interface QueryTurmaById_turma_alunos {
  __typename: "Alunos";
  id: string;
  name: string;
  sexo: ENUM_ALUNOS_SEXO;
  numero_do_BI: string | null;
  numeroDeMatricula: string | null;
  birthday: any | null;
  telefone: string | null;
}

export interface QueryTurmaById_turma_teachers_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface QueryTurmaById_turma_teachers_user {
  __typename: "UsersPermissionsUser";
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: QueryTurmaById_turma_teachers_user_avatar | null;
}

export interface QueryTurmaById_turma_teachers {
  __typename: "Professores";
  id: string;
  name: string;
  sexo: ENUM_PROFESSORES_SEXO;
  numero_do_BI: string | null;
  birthday: any | null;
  telefone: string | null;
  user: QueryTurmaById_turma_teachers_user | null;
}

export interface QueryTurmaById_turma_aulas {
  __typename: "Aulas";
  id: string;
  title: string;
}

export interface QueryTurmaById_turma {
  __typename: "Turmas";
  id: string;
  title: string;
  description: string | null;
  code: string | null;
  status: ENUM_TURMAS_STATUS | null;
  institution: QueryTurmaById_turma_institution | null;
  alunos: QueryTurmaById_turma_alunos[];
  teachers: QueryTurmaById_turma_teachers[];
  aulas: QueryTurmaById_turma_aulas[];
}

export interface QueryTurmaById {
  turma: QueryTurmaById_turma | null;
}

export interface QueryTurmaByIdVariables {
  id: string;
}
