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

export enum ENUM_COMPONENTTURMAHORARIO_DAYWEEK {
  DOMINGO = "DOMINGO",
  QUARTA_FEIRA = "QUARTA_FEIRA",
  QUINTA_FEIRA = "QUINTA_FEIRA",
  SABADO = "SABADO",
  SEGUNDA_FEIRA = "SEGUNDA_FEIRA",
  SEXTA_FEIRA = "SEXTA_FEIRA",
  TERCA_FEIRA = "TERCA_FEIRA",
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

export interface AtendenteInput {
  Endereco?: ComponentRegisterEnderecoInput | null;
  name: string;
  sexo?: ENUM_ATENDENTES_SEXO | null;
  numero_do_BI?: string | null;
  telefone?: string | null;
  birthday?: any | null;
  institution?: string | null;
  user?: string | null;
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

export interface ComponentTurmaHorarioInput {
  dayweek: ENUM_COMPONENTTURMAHORARIO_DAYWEEK;
  start_Hour: any;
  end_Hour: any;
  local?: string | null;
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

export interface TurmaInput {
  title: string;
  description?: string | null;
  code?: string | null;
  status?: ENUM_TURMAS_STATUS | null;
  Horario?: ComponentTurmaHorarioInput | null;
  institution?: string | null;
  alunos?: (string | null)[] | null;
  teachers?: (string | null)[] | null;
  aulas?: (string | null)[] | null;
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

export interface createAtendenteInput {
  data?: AtendenteInput | null;
}

export interface createProfessoreInput {
  data?: ProfessoreInput | null;
}

export interface createTurmaInput {
  data?: TurmaInput | null;
}

export interface createUserInput {
  data?: UserInput | null;
}

export interface deleteAlunoInput {
  where?: InputID | null;
}

export interface deleteAtendenteInput {
  where?: InputID | null;
}

export interface deleteProfessoreInput {
  where?: InputID | null;
}

export interface deleteTurmaInput {
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

export interface editAtendenteInput {
  Endereco?: editComponentRegisterEnderecoInput | null;
  name?: string | null;
  sexo?: ENUM_ATENDENTES_SEXO | null;
  numero_do_BI?: string | null;
  telefone?: string | null;
  birthday?: any | null;
  institution?: string | null;
  user?: string | null;
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

export interface editComponentTurmaHorarioInput {
  id?: string | null;
  dayweek?: ENUM_COMPONENTTURMAHORARIO_DAYWEEK | null;
  start_Hour?: any | null;
  end_Hour?: any | null;
  local?: string | null;
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

export interface editTurmaInput {
  title?: string | null;
  description?: string | null;
  code?: string | null;
  status?: ENUM_TURMAS_STATUS | null;
  Horario?: editComponentTurmaHorarioInput | null;
  institution?: string | null;
  alunos?: (string | null)[] | null;
  teachers?: (string | null)[] | null;
  aulas?: (string | null)[] | null;
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

export interface updateAtendenteInput {
  where?: InputID | null;
  data?: editAtendenteInput | null;
}

export interface updateProfessoreInput {
  where?: InputID | null;
  data?: editProfessoreInput | null;
}

export interface updateTurmaInput {
  where?: InputID | null;
  data?: editTurmaInput | null;
}

export interface updateUserInput {
  where?: InputID | null;
  data?: editUserInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
