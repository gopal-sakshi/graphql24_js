import { GraphQLScalarType, Kind } from 'graphql';

const dateScalar = new GraphQLScalarType({
    name: 'Date111',
    description: 'customScalarType23',
    serialize(value) {
        if (value instanceof Date) {
            console.log("serialize chestunnaa undu ===> ", value, value.getTime());
            return value.getTime(); // Convert outgoing Date to integer for JSON (OR) value sent to the client
        }
        throw Error('GraphQL Date Scalar serializer expected a `Date` object');
    },
    parseValue(value) {
        if (typeof value === 'number') {
            console.log("parseValue chestunnaa undu ===> ", new Date(value));
            return new Date(value); // Convert incoming integer to Date (OR) value from the client
        }
        throw new Error('idendayya idi ===> GraphQL Date Scalar parser expected a `number`');
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.INT) {
            // Convert hard-coded AST string to integer and then to Date
            return new Date(parseInt(ast.value, 10));
        }
        // Invalid hard-coded value (not an integer)
        return null;
    },
});

export { dateScalar }