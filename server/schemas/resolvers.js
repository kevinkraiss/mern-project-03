const { GraphQLError } = require('graphql')
const { User } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        user: async (parent, args, context, info) => {
            return await User.find()
        }
    },
    Mutation: {
        login: async (parent, args, context, info) => {
            const user = await User.findOne({ email })
            if (!user) {
                throw new GraphQLError('User not found.', {
                    extensions: {
                        code: 'USER NOT FOUND',
                        http: { status: 404 }
                    }
                })
            }
            const isCorrectPassword = await user.isCorrectPassword(password)
            if (!isCorrectPassword) {
                throw new GraphQLError('Password is incorrect.', {
                    extensions: {
                        code: 'INCORRECT PASSWORD',
                        http: { status: 401 }
                    }
                })
            }
            const token = signToken(user)
            return { token, user }
        },
        addUser: async (parent, args, context, info) => {
            const user = await User.create(args)
            return user
        }
    }

}

module.exports = resolvers