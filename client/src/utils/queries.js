import { gql } from '@apollo/client';

export const GET_USER = gql`
query User($id: ID!) {
  user(_id: $id) {
    email
    username
    _id
    receipts {
      _id
      spent
      place
      purchaseDate
    }
  }
}
`;


export const GET_PLACE = gql`
query Place($id: ID!) {
  place(_id: $id) {
    _id
    name
    formatted_address
    editorial_summary
  }
}
`;

export const GET_PLACES = gql`
query ALL_PLACES {
  places {
    _id
    name
  }
}
`;

export const GET_RECEIPT = gql`
query Receipt($id: ID!) {
  receipt(_id: $id) {
    _id
    spent
    purchaseDate
    place
  }
}
`;