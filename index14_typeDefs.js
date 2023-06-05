import { gql } from "graphql-tag";
// see also schema14.graphql

const typeDefs = gql`
    type Query {
        greetings: String
    }
`;

export default typeDefs;