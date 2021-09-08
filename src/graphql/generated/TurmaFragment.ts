/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_TURMAS_STATUS } from "./globalTypes";

// ====================================================
// GraphQL fragment: TurmaFragment
// ====================================================

export interface TurmaFragment {
  __typename: "Turmas";
  id: string;
  title: string;
  description: string | null;
  code: string | null;
  status: ENUM_TURMAS_STATUS | null;
}
