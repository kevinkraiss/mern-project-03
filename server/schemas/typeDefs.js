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

    type Place {
        _id: ID
        name: String
        formatted_address: String
        editorial_summary: String
    }

    type Query {
        user(_id: ID!): User
    }

    type Mutation {
        login(email: String, password: String!): Auth
        addPlace: {
            _id: ID
            name: String
            formatted_address: String
            editorial_summary: String
        }
        addReceipt: {
            _id: ID
            spent: Int
            purchaseDate: String
            place: [String]
    }

        addUser(
            username: String!
            email: String!
            password: String!
        ): User
    }
`
module.exports = typeDefs