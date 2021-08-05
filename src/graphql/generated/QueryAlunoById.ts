/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_ALUNOS_SEXO } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryAlunoById
// ====================================================

export interface QueryAlunoById_aluno_user_avatar {
  __typename: "UploadFile";
  src: string;
}

export interface QueryAlunoById_aluno_user {
  __typename: "UsersPermissionsUser";
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: QueryAlunoById_aluno_user_avatar | null;
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
}

export interface QueryAlunoById {
  aluno: QueryAlunoById_aluno | null;
}

export interface QueryAlunoByIdVariables {
  id: string;
}
