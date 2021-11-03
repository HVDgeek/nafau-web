/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryPerfis
// ====================================================

export interface QueryPerfis_perfis {
  __typename: "Perfis";
  id: string;
  name: string;
}

export interface QueryPerfis {
  perfis: QueryPerfis_perfis[];
}

export interface QueryPerfisVariables {
  limit: number;
}
