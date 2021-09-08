/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_PROFESSORES_SEXO } from "./globalTypes";

// ====================================================
// GraphQL fragment: ProfessorFragment
// ====================================================

export interface ProfessorFragment {
  __typename: "Professores";
  id: string;
  name: string;
  sexo: ENUM_PROFESSORES_SEXO;
  numero_do_BI: string | null;
  birthday: any | null;
  telefone: string | null;
}
