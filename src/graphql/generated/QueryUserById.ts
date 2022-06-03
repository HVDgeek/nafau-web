/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_TURMAS_STATUS, ENUM_ALUNOS_SEXO, ENUM_PROFESSORES_SEXO } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryUserById
// ====================================================

export interface QueryUserById_user_aluno_turmas_institution {
  __typename: "Instituicoes";
  id: string;
  name: string;
}

export interface QueryUserById_user_aluno_turmas_alunos {
  __typename: "Alunos";
  id: string;
  name: string;
  sexo: ENUM_ALUNOS_SEXO;
  numero_do_BI: string | null;
  numeroDeMatricula: string | null;
  birthday: any | null;
  telefone: string | null;
}

export interface QueryUserById_user_aluno_turmas_teachers_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface QueryUserById_user_aluno_turmas_teachers_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: QueryUserById_user_aluno_turmas_teachers_user_avatar | null;
}

export interface QueryUserById_user_aluno_turmas_teachers {
  __typename: "Professores";
  id: string;
  name: string;
  sexo: ENUM_PROFESSORES_SEXO;
  numero_do_BI: string | null;
  birthday: any | null;
  telefone: string | null;
  user: QueryUserById_user_aluno_turmas_teachers_user | null;
}

export interface QueryUserById_user_aluno_turmas_aulas {
  __typename: "Aulas";
  id: string;
  title: string;
}

export interface QueryUserById_user_aluno_turmas {
  __typename: "Turmas";
  id: string;
  title: string;
  description: string | null;
  code: string | null;
  status: ENUM_TURMAS_STATUS | null;
  institution: QueryUserById_user_aluno_turmas_institution | null;
  alunos: QueryUserById_user_aluno_turmas_alunos[];
  teachers: QueryUserById_user_aluno_turmas_teachers[];
  aulas: QueryUserById_user_aluno_turmas_aulas[];
}

export interface QueryUserById_user_aluno {
  __typename: "Alunos";
  id: string;
  name: string;
  turmas: QueryUserById_user_aluno_turmas[];
}

export interface QueryUserById_user_teacher_turmas_institution {
  __typename: "Instituicoes";
  id: string;
  name: string;
}

export interface QueryUserById_user_teacher_turmas_alunos {
  __typename: "Alunos";
  id: string;
  name: string;
  sexo: ENUM_ALUNOS_SEXO;
  numero_do_BI: string | null;
  numeroDeMatricula: string | null;
  birthday: any | null;
  telefone: string | null;
}

export interface QueryUserById_user_teacher_turmas_teachers_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface QueryUserById_user_teacher_turmas_teachers_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: QueryUserById_user_teacher_turmas_teachers_user_avatar | null;
}

export interface QueryUserById_user_teacher_turmas_teachers {
  __typename: "Professores";
  id: string;
  name: string;
  sexo: ENUM_PROFESSORES_SEXO;
  numero_do_BI: string | null;
  birthday: any | null;
  telefone: string | null;
  user: QueryUserById_user_teacher_turmas_teachers_user | null;
}

export interface QueryUserById_user_teacher_turmas_aulas {
  __typename: "Aulas";
  id: string;
  title: string;
}

export interface QueryUserById_user_teacher_turmas {
  __typename: "Turmas";
  id: string;
  title: string;
  description: string | null;
  code: string | null;
  status: ENUM_TURMAS_STATUS | null;
  institution: QueryUserById_user_teacher_turmas_institution | null;
  alunos: QueryUserById_user_teacher_turmas_alunos[];
  teachers: QueryUserById_user_teacher_turmas_teachers[];
  aulas: QueryUserById_user_teacher_turmas_aulas[];
}

export interface QueryUserById_user_teacher {
  __typename: "Professores";
  id: string;
  name: string;
  turmas: QueryUserById_user_teacher_turmas[];
}

export interface QueryUserById_user_profile_canManageAluno {
  __typename: "ComponentProfileCanManageAluno";
  id: string;
  isActive: boolean;
  title: string;
}

export interface QueryUserById_user_profile_canManageAtendente {
  __typename: "ComponentProfileCanManageAtendente";
  id: string;
  isActive: boolean | null;
  title: string;
}

export interface QueryUserById_user_profile_canManageAula {
  __typename: "ComponentProfileCanManageAula";
  id: string;
  isActive: boolean | null;
  title: string;
}

export interface QueryUserById_user_profile_canManageGerente {
  __typename: "ComponentProfileCanManageGerente";
  id: string;
  isActive: boolean;
  title: string;
}

export interface QueryUserById_user_profile_canManageRoles {
  __typename: "ComponentProfileCanManageRoles";
  id: string;
  isActive: boolean | null;
  title: string;
}

export interface QueryUserById_user_profile_canManageTeacher {
  __typename: "ComponentProfileCanManageTeacher";
  id: string;
  isActive: boolean | null;
  title: string;
}

export interface QueryUserById_user_profile_canManageTurma {
  __typename: "ComponentProfileCanManageTurma";
  id: string;
  isActive: boolean | null;
  title: string;
}

export interface QueryUserById_user_profile_canManageUsers {
  __typename: "ComponentProfileCanManageUsers";
  id: string;
  isActive: boolean | null;
  title: string;
}

export interface QueryUserById_user_profile_canSeeAulas {
  __typename: "ComponentProfileCanSeeAulas";
  id: string;
  isActive: boolean | null;
  title: string;
}

export interface QueryUserById_user_profile_canSeeOtherUsers {
  __typename: "ComponentProfileCanSeeOtherUsers";
  id: string;
  isActive: boolean | null;
  title: string;
}

export interface QueryUserById_user_profile_canSeeTurmas {
  __typename: "ComponentProfileCanSeeTurmas";
  id: string;
  isActive: boolean | null;
  title: string;
}

export interface QueryUserById_user_profile {
  __typename: "Perfis";
  canManageAluno: QueryUserById_user_profile_canManageAluno | null;
  canManageAtendente: QueryUserById_user_profile_canManageAtendente | null;
  canManageAula: QueryUserById_user_profile_canManageAula | null;
  canManageGerente: QueryUserById_user_profile_canManageGerente | null;
  canManageRoles: QueryUserById_user_profile_canManageRoles | null;
  canManageTeacher: QueryUserById_user_profile_canManageTeacher | null;
  canManageTurma: QueryUserById_user_profile_canManageTurma | null;
  canManageUsers: QueryUserById_user_profile_canManageUsers | null;
  canSeeAulas: QueryUserById_user_profile_canSeeAulas | null;
  canSeeOtherUsers: QueryUserById_user_profile_canSeeOtherUsers | null;
  canSeeTurmas: QueryUserById_user_profile_canSeeTurmas | null;
  id: string;
  name: string;
}

export interface QueryUserById_user {
  __typename: "UsersPermissionsUser";
  id: string;
  aluno: QueryUserById_user_aluno | null;
  teacher: QueryUserById_user_teacher | null;
  profile: QueryUserById_user_profile | null;
}

export interface QueryUserById {
  user: QueryUserById_user | null;
}

export interface QueryUserByIdVariables {
  id: string;
}
