/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_ATENDENTES_SEXO } from "./globalTypes";

// ====================================================
// GraphQL fragment: AtendenteFragment
// ====================================================

export interface AtendenteFragment {
  __typename: "Atendentes";
  id: string;
  name: string;
  sexo: ENUM_ATENDENTES_SEXO;
  numero_do_BI: string | null;
  birthday: any | null;
  telefone: string | null;
}
