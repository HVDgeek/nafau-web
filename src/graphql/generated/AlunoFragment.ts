/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_ALUNOS_SEXO } from "./globalTypes";

// ====================================================
// GraphQL fragment: AlunoFragment
// ====================================================

export interface AlunoFragment {
  __typename: "Alunos";
  id: string;
  name: string;
  sexo: ENUM_ALUNOS_SEXO;
  numero_do_BI: string | null;
  numeroDeMatricula: string | null;
  birthday: any | null;
  telefone: string | null;
}
