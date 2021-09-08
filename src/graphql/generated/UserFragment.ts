/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserFragment
// ====================================================

export interface UserFragment_avatar {
  __typename: "UploadFile";
  alternativeText: string | null;
  src: string;
}

export interface UserFragment {
  __typename: "UsersPermissionsUser";
  email: string;
  username: string;
  blocked: boolean | null;
  avatar: UserFragment_avatar | null;
}
