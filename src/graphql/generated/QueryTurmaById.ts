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

export interface QueryTurmaById_turma_alunos_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface QueryTurmaById_turma_alunos_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: QueryTurmaById_turma_alunos_user_avatar | null;
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
  user: QueryTurmaById_turma_alunos_user | null;
}

export interface QueryTurmaById_turma_teachers_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface QueryTurmaById_turma_teachers_user {
  __typename: "UsersPermissionsUser";
  id: string;
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

export interface QueryTurmaById_turma_aulas_arquivo_files {
  __typename: "UploadFile";
  url: string;
}

export interface QueryTurmaById_turma_aulas_arquivo {
  __typename: "ComponentAulasArquivo";
  id: string;
  name: string | null;
  description: string | null;
  url: string | null;
  files: QueryTurmaById_turma_aulas_arquivo_files[];
}

export interface QueryTurmaById_turma_aulas_links {
  __typename: "ComponentAulasLinks";
  id: string;
  title: string | null;
  url: string | null;
  description: string | null;
}

export interface QueryTurmaById_turma_aulas_video {
  __typename: "ComponentAulasVideo";
  id: string;
  title: string | null;
  description: string | null;
  url: string | null;
}

export interface QueryTurmaById_turma_aulas_audio {
  __typename: "ComponentAulasAudio";
  id: string;
  title: string | null;
  description: string | null;
  url: string | null;
}

export interface QueryTurmaById_turma_aulas {
  __typename: "Aulas";
  id: string;
  title: string;
  description: string | null;
  created_at: any;
  updated_at: any;
  arquivo: (QueryTurmaById_turma_aulas_arquivo | null)[] | null;
  links: (QueryTurmaById_turma_aulas_links | null)[] | null;
  video: (QueryTurmaById_turma_aulas_video | null)[] | null;
  audio: (QueryTurmaById_turma_aulas_audio | null)[] | null;
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
