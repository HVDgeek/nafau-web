/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createTurmaInput, ENUM_TURMAS_STATUS } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationCreateTurma
// ====================================================

export interface MutationCreateTurma_createTurma_turma {
  __typename: "Turmas";
  id: string;
  title: string;
  description: string | null;
  code: string | null;
  status: ENUM_TURMAS_STATUS | null;
}

export interface MutationCreateTurma_createTurma {
  __typename: "createTurmaPayload";
  turma: MutationCreateTurma_createTurma_turma | null;
}

export interface MutationCreateTurma {
  createTurma: MutationCreateTurma_createTurma | null;
}

export interface MutationCreateTurmaVariables {
  input: createTurmaInput;
}
