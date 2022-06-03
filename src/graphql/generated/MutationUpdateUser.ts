/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { updateUserInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationUpdateUser
// ====================================================

export interface MutationUpdateUser_updateUser_user_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface MutationUpdateUser_updateUser_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: MutationUpdateUser_updateUser_user_avatar | null;
}

export interface MutationUpdateUser_updateUser {
  __typename: "updateUserPayload";
  user: MutationUpdateUser_updateUser_user | null;
}

export interface MutationUpdateUser {
  /**
   * Update an existing user
   */
  updateUser: MutationUpdateUser_updateUser | null;
}

export interface MutationUpdateUserVariables {
  input: updateUserInput;
}
