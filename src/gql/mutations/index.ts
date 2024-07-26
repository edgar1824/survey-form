import { gql } from "@apollo/client";

// # In this example we add a new review to a station and return the new review ID

export const CREATE_SURVEY = gql`
  mutation ($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
      name
      email
      body
    }
  }
`;
