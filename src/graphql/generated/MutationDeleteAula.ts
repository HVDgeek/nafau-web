/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MutationDeleteAula
// ====================================================

export interface MutationDeleteAula_deleteAula_aula {
  __typename: "Aulas";
  id: string;
  title: string;
}

export interface MutationDeleteAula_deleteAula {
  __typename: "deleteAulaPayload";
  aula: MutationDeleteAula_deleteAula_aula | null;
}

export interface MutationDeleteAula {
  deleteAula: MutationDeleteAula_deleteAula | null;
}

export interface MutationDeleteAulaVariables {
  idAula: string;
}
