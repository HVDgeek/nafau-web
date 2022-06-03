/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MutationCreateAula
// ====================================================

export interface MutationCreateAula_createAula_aula {
  __typename: "Aulas";
  id: string;
  title: string;
}

export interface MutationCreateAula_createAula {
  __typename: "createAulaPayload";
  aula: MutationCreateAula_createAula_aula | null;
}

export interface MutationCreateAula {
  createAula: MutationCreateAula_createAula | null;
}

export interface MutationCreateAulaVariables {
  title: string;
  description?: string | null;
  idTurma: string;
}
