/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { editAulaInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationUpdateAula
// ====================================================

export interface MutationUpdateAula_updateAula_aula {
  __typename: "Aulas";
  id: string;
  title: string;
}

export interface MutationUpdateAula_updateAula {
  __typename: "updateAulaPayload";
  aula: MutationUpdateAula_updateAula_aula | null;
}

export interface MutationUpdateAula {
  updateAula: MutationUpdateAula_updateAula | null;
}

export interface MutationUpdateAulaVariables {
  idAula: string;
  input?: editAulaInput | null;
}
