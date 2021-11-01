/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ENUM_ALUNOS_SEXO {
  F = "F",
  M = "M",
}

export enum ENUM_ATENDENTES_SEXO {
  F = "F",
  M = "M",
}

export enum ENUM_PROFESSORES_SEXO {
  F = "F",
  M = "M",
}

export enum ENUM_TURMAS_STATUS {
  EMCURSO = "EMCURSO",
  ENCERREDA = "ENCERREDA",
  PAUSE = "PAUSE",
}

export interface AlunoInput {
  Endereco?: ComponentRegisterEnderecoInput | null;
  name: string;
  sexo?: ENUM_ALUNOS_SEXO | null;
  numero_do_BI?: string | null;
  birthday?: any | null;
  telefone?: string | null;
  institution?: string | null;
  user?: string | null;
  turmas?: (string | null)[] | null;
  entregas?: string | null;
  numeroDeMatricula?: string | null;
  published_at?: any | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface ComponentRegisterEnderecoInput {
  pais: string;
  provincia: string;
  municipio?: string | null;
  bairro?: string | null;
  rua?: string | null;
  numero?: string | null;
}

export interface InputID {
  id: string;
}

export interface ProfessoreInput {
  name: string;
  numero_do_BI?: string | null;
  sexo?: ENUM_PROFESSORES_SEXO | null;
  birthday?: any | null;
  telefone?: string | null;
  Endereco?: ComponentRegisterEnderecoInput | null;
  institution?: string | null;
  user?: string | null;
  turmas?: (string | null)[] | null;
  published_at?: any | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface UserInput {
  username: string;
  email: string;
  provider?: string | null;
  password?: string | null;
  resetPasswordToken?: string | null;
  confirmationToken?: string | null;
  confirmed?: boolean | null;
  blocked?: boolean | null;
  role?: string | null;
  institution?: string | null;
  gerente?: string | null;
  atendente?: string | null;
  aluno?: string | null;
  teacher?: string | null;
  profile?: string | null;
  avatar?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface UsersPermissionsRegisterInput {
  username: string;
  email: string;
  password: string;
}

export interface createAlunoInput {
  data?: AlunoInput | null;
}

export interface createProfessoreInput {
  data?: ProfessoreInput | null;
}

export interface createUserInput {
  data?: UserInput | null;
}

export interface deleteAlunoInput {
  where?: InputID | null;
}

export interface deleteProfessoreInput {
  where?: InputID | null;
}

export interface deleteUserInput {
  where?: InputID | null;
}

export interface editAlunoInput {
  Endereco?: editComponentRegisterEnderecoInput | null;
  name?: string | null;
  sexo?: ENUM_ALUNOS_SEXO | null;
  numero_do_BI?: string | null;
  birthday?: any | null;
  telefone?: string | null;
  institution?: string | null;
  user?: string | null;
  turmas?: (string | null)[] | null;
  entregas?: string | null;
  numeroDeMatricula?: string | null;
  published_at?: any | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface editComponentRegisterEnderecoInput {
  id?: string | null;
  pais?: string | null;
  provincia?: string | null;
  municipio?: string | null;
  bairro?: string | null;
  rua?: string | null;
  numero?: string | null;
}

export interface editProfessoreInput {
  name?: string | null;
  numero_do_BI?: string | null;
  sexo?: ENUM_PROFESSORES_SEXO | null;
  birthday?: any | null;
  telefone?: string | null;
  Endereco?: editComponentRegisterEnderecoInput | null;
  institution?: string | null;
  user?: string | null;
  turmas?: (string | null)[] | null;
  published_at?: any | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface editUserInput {
  username?: string | null;
  email?: string | null;
  provider?: string | null;
  password?: string | null;
  resetPasswordToken?: string | null;
  confirmationToken?: string | null;
  confirmed?: boolean | null;
  blocked?: boolean | null;
  role?: string | null;
  institution?: string | null;
  gerente?: string | null;
  atendente?: string | null;
  aluno?: string | null;
  teacher?: string | null;
  profile?: string | null;
  avatar?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface updateAlunoInput {
  where?: InputID | null;
  data?: editAlunoInput | null;
}

export interface updateProfessoreInput {
  where?: InputID | null;
  data?: editProfessoreInput | null;
}

export interface updateUserInput {
  where?: InputID | null;
  data?: editUserInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
