/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AulaFragment
// ====================================================

export interface AulaFragment_arquivo_files {
  __typename: "UploadFile";
  url: string;
}

export interface AulaFragment_arquivo {
  __typename: "ComponentAulasArquivo";
  id: string;
  name: string | null;
  description: string | null;
  url: string | null;
  files: AulaFragment_arquivo_files[];
}

export interface AulaFragment_links {
  __typename: "ComponentAulasLinks";
  id: string;
  title: string | null;
  url: string | null;
  description: string | null;
}

export interface AulaFragment_video {
  __typename: "ComponentAulasVideo";
  id: string;
  title: string | null;
  description: string | null;
  url: string | null;
}

export interface AulaFragment_audio {
  __typename: "ComponentAulasAudio";
  id: string;
  title: string | null;
  description: string | null;
  url: string | null;
}

export interface AulaFragment {
  __typename: "Aulas";
  id: string;
  title: string;
  description: string | null;
  created_at: any;
  updated_at: any;
  arquivo: (AulaFragment_arquivo | null)[] | null;
  links: (AulaFragment_links | null)[] | null;
  video: (AulaFragment_video | null)[] | null;
  audio: (AulaFragment_audio | null)[] | null;
}
