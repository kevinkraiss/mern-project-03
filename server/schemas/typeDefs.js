const typeDefs = `
    type Auth {
        token: String
        user: User
    }

    type User {
        _id: ID
        username: String
        email: String
    }

    type Receipt {
        _id: ID
        spent: Int
        purchaseDate: String
        location: String
    }

    type Query {
        user(_id: ID!): User
    }

    type Mutation {
        login(email: String, password: String!): Auth

        addUser(
            username: String!
            email: String!
            password: String!
        ): User
    }
`
module.exports = typeDefs