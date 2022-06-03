/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { deleteUserInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationDeleteUser
// ====================================================

export interface MutationDeleteUser_deleteUser_user {
  __typename: "UsersPermissionsUser";
  id: string;
}

export interface MutationDeleteUser_deleteUser {
  __typename: "deleteUserPayload";
  user: MutationDeleteUser_deleteUser_user | null;
}

export interface MutationDeleteUser {
  /**
   * Delete an existing user
   */
  deleteUser: MutationDeleteUser_deleteUser | null;
}

export interface MutationDeleteUserVariables {
  input: deleteUserInput;
}
