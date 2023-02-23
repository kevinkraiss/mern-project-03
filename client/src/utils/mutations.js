import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation LOGIN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`

export const ADD_RECEIPT = gql `
  mutation ADD_RECEIPT($user: String!,$spent: Float!, $purchaseDate: String!, $place: String!) {
    addReceipt(user: $user, spent: $spent, purchaseDate: $purchaseDate, place: $place) {
      _id
      spent
      purchaseDate
      place
    }
  }
`

export const DELETE_RECEIPT = gql `
  mutation DELETE_RECEIPT($_id:ID!){
    deleteReceipt(_id:$_id){
      _id
      spent
      purchaseDate
      place
    }
  }
`