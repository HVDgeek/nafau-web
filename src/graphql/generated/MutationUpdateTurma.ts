/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { updateTurmaInput, ENUM_TURMAS_STATUS } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationUpdateTurma
// ====================================================

export interface MutationUpdateTurma_updateTurma_turma {
  __typename: "Turmas";
  id: string;
  title: string;
  description: string | null;
  code: string | null;
  status: ENUM_TURMAS_STATUS | null;
}

export interface MutationUpdateTurma_updateTurma {
  __typename: "updateTurmaPayload";
  turma: MutationUpdateTurma_updateTurma_turma | null;
}

export interface MutationUpdateTurma {
  updateTurma: MutationUpdateTurma_updateTurma | null;
}

export interface MutationUpdateTurmaVariables {
  input: updateTurmaInput;
}
