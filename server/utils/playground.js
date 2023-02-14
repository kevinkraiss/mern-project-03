`

query User($id: ID!) {
    user(_id: $id) {
      email
      username
      _id
      receipts {
        _id
        spent
        purchaseDate
      }
    }
  }
   query ALL_USERS {
     users {
       email
       username
       _id
     }
   }
  
  
  query ALL_PLACES {
    places {
      _id
      name
    }
  }
  
  query Place($id: ID!) {
    place(_id: $id) {
      _id
      name
      formatted_address
      editorial_summary
    }
  }
  
  query Receipt($id: ID!) {
    receipt(_id: $id) {
      _id
      spent
      purchaseDate
      place
    }
  }
  
  mutation ADD_USER($username: String!, $email: String!, $password: String!){
    addUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
    }
  }
  
  mutation ADD_RECEIPT($user: String!,$spent: Int, $purchaseDate: String!, $place: String!) {
    addReceipt(user: $user, spent: $spent, purchaseDate: $purchaseDate, place: $place) {
      _id
      spent
      purchaseDate
      place
    }
  }
  
  
  `