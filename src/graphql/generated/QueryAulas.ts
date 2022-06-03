/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryAulas
// ====================================================

export interface QueryAulas_aulas_arquivo_files {
  __typename: "UploadFile";
  url: string;
}

export interface QueryAulas_aulas_arquivo {
  __typename: "ComponentAulasArquivo";
  id: string;
  name: string | null;
  description: string | null;
  url: string | null;
  files: QueryAulas_aulas_arquivo_files[];
}

export interface QueryAulas_aulas_links {
  __typename: "ComponentAulasLinks";
  id: string;
  title: string | null;
  url: string | null;
  description: string | null;
}

export interface QueryAulas_aulas_video {
  __typename: "ComponentAulasVideo";
  id: string;
  title: string | null;
  description: string | null;
  url: string | null;
}

export interface QueryAulas_aulas_audio {
  __typename: "ComponentAulasAudio";
  id: string;
  title: string | null;
  description: string | null;
  url: string | null;
}

export interface QueryAulas_aulas {
  __typename: "Aulas";
  id: string;
  title: string;
  description: string | null;
  created_at: any;
  updated_at: any;
  arquivo: (QueryAulas_aulas_arquivo | null)[] | null;
  links: (QueryAulas_aulas_links | null)[] | null;
  video: (QueryAulas_aulas_video | null)[] | null;
  audio: (QueryAulas_aulas_audio | null)[] | null;
}

export interface QueryAulas_aulasConnection_values {
  __typename: "Aulas";
  id: string;
}

export interface QueryAulas_aulasConnection {
  __typename: "AulasConnection";
  values: (QueryAulas_aulasConnection_values | null)[] | null;
}

export interface QueryAulas {
  aulas: QueryAulas_aulas[];
  aulasConnection: QueryAulas_aulasConnection | null;
}

export interface QueryAulasVariables {
  limit: number;
  start?: number | null;
  idTurma: string;
}
