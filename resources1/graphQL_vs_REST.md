# HTTP vs GraphQL

HTTP is commonly associated with REST, which uses `resources` as its core concept. 

In contrast, GraphQL's conceptual model is an entity graph. 
As a result, entities in GraphQL are not identified by URLs. 
Instead, a GraphQL server operates on a single URL/endpoint     `/graphql`
all GraphQL requests for a given service should be directed at this endpoint
-----------------------------------------------------------------------------------------------------

`GET`
- When receiving an HTTP GET request, the GraphQL query should be specified in the `query` query string.
{ me { name } }         is similar to       http://myapi/graphql?query={me{name}}


`POST request`
- use the application/json content type
    {
        "query": "...",
        "operationName": "...",
        "variables": { "myVariable": "someValue", ... }
    }
- 


`GraphiQL`
- useful during testing & development but should be disabled in production

-----------------------------------------------------------------------------------------------------