/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createUserInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationCreateUser
// ====================================================

export interface MutationCreateUser_createUser_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface MutationCreateUser_createUser_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: MutationCreateUser_createUser_user_avatar | null;
}

export interface MutationCreateUser_createUser {
  __typename: "createUserPayload";
  user: MutationCreateUser_createUser_user | null;
}

export interface MutationCreateUser {
  /**
   * Create a new user
   */
  createUser: MutationCreateUser_createUser | null;
}

export interface MutationCreateUserVariables {
  input: createUserInput;
}
