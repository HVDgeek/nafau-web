/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { deleteTurmaInput, ENUM_TURMAS_STATUS } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationDeleteTurma
// ====================================================

export interface MutationDeleteTurma_deleteTurma_turma {
  __typename: "Turmas";
  id: string;
  title: string;
  description: string | null;
  code: string | null;
  status: ENUM_TURMAS_STATUS | null;
}

export interface MutationDeleteTurma_deleteTurma {
  __typename: "deleteTurmaPayload";
  turma: MutationDeleteTurma_deleteTurma_turma | null;
}

export interface MutationDeleteTurma {
  deleteTurma: MutationDeleteTurma_deleteTurma | null;
}

export interface MutationDeleteTurmaVariables {
  input: deleteTurmaInput;
}
