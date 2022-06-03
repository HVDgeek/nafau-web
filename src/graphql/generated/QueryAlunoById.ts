/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_ALUNOS_SEXO, ENUM_TURMAS_STATUS, ENUM_PROFESSORES_SEXO } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryAlunoById
// ====================================================

export interface QueryAlunoById_aluno_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface QueryAlunoById_aluno_user_institution {
  __typename: "Instituicoes";
  id: string;
  name: string;
}

export interface QueryAlunoById_aluno_user_profile {
  __typename: "Perfis";
  id: string;
  name: string;
}

export interface QueryAlunoById_aluno_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: QueryAlunoById_aluno_user_avatar | null;
  institution: QueryAlunoById_aluno_user_institution | null;
  profile: QueryAlunoById_aluno_user_profile | null;
}

export interface QueryAlunoById_aluno_turmas_alunos_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface QueryAlunoById_aluno_turmas_alunos_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: QueryAlunoById_aluno_turmas_alunos_user_avatar | null;
}

export interface QueryAlunoById_aluno_turmas_alunos {
  __typename: "Alunos";
  id: string;
  name: string;
  sexo: ENUM_ALUNOS_SEXO;
  numero_do_BI: string | null;
  numeroDeMatricula: string | null;
  birthday: any | null;
  telefone: string | null;
  user: QueryAlunoById_aluno_turmas_alunos_user | null;
}

export interface QueryAlunoById_aluno_turmas_teachers_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface QueryAlunoById_aluno_turmas_teachers_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: QueryAlunoById_aluno_turmas_teachers_user_avatar | null;
}

export interface QueryAlunoById_aluno_turmas_teachers {
  __typename: "Professores";
  id: string;
  name: string;
  sexo: ENUM_PROFESSORES_SEXO;
  numero_do_BI: string | null;
  birthday: any | null;
  telefone: string | null;
  user: QueryAlunoById_aluno_turmas_teachers_user | null;
}

export interface QueryAlunoById_aluno_turmas_aulas {
  __typename: "Aulas";
  id: string;
  title: string;
}

export interface QueryAlunoById_aluno_turmas {
  __typename: "Turmas";
  id: string;
  title: string;
  description: string | null;
  code: string | null;
  status: ENUM_TURMAS_STATUS | null;
  alunos: QueryAlunoById_aluno_turmas_alunos[];
  teachers: QueryAlunoById_aluno_turmas_teachers[];
  aulas: QueryAlunoById_aluno_turmas_aulas[];
}

export interface QueryAlunoById_aluno {
  __typename: "Alunos";
  id: string;
  name: string;
  sexo: ENUM_ALUNOS_SEXO;
  numero_do_BI: string | null;
  numeroDeMatricula: string | null;
  birthday: any | null;
  telefone: string | null;
  user: QueryAlunoById_aluno_user | null;
  turmas: QueryAlunoById_aluno_turmas[];
}

export interface QueryAlunoById {
  aluno: QueryAlunoById_aluno | null;
}

export interface QueryAlunoByIdVariables {
  id: string;
}
