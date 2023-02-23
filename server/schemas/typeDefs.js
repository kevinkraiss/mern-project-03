const typeDefs = `
    type Auth {
        token: String
        user: User
    }

    type User {
        _id: ID
        username: String
        email: String
        receipts: [Receipt]
    }

    type Receipt {
        _id: ID
        spent: Float
        purchaseDate: String
        place: String
    }

    type Place {
        _id: ID
        name: String
        formatted_address: String
        editorial_summary: String
    }

    type Query {
        user(_id: ID!): User
        users: [User]
        place(_id: ID!): Place
        places: [Place]
        receipt(_id: ID!): Receipt
    }

    type Mutation {
        login(email: String, password: String!): Auth
        
        addPlace(
            _id: ID!
            name: String!
            formatted_address: String
            editorial_summary: String
        ): Place

        addReceipt(
            _id: ID
            user: String!
            spent: Float!
            purchaseDate: String!
            place: String!
        ): Receipt

        deleteReceipt(
            _id:ID!
        ): Receipt

        addUser(
            username: String!
            email: String!
            password: String!
        ): User

    }
`
module.exports = typeDefs