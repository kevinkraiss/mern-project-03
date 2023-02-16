import { gql } from '@apollo/client';

export const GET_USER = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

export const GET_USERS = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;

export const GET_PLACE = gql`
  query me {
    me {
      _id
      name
      skills
    }
  }
`;

export const GET_PLACES = gql`
`;

export const GET_RECEIPT = gql`
`;