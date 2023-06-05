Scalar types
- Int, Float, String, Boolean, ID

Object
- custom types that we define (Student in schema14 ===> userDefined object datatype)
- Every object type in your schema automatically has a field named `__typename`

`Query type`
- special Object datatype
    like Student is custom/userDefined object datatype... Query is special object datatype
- entry points for queries that client execute against graphQL server
- schema14.graphql
    we have two fields in <query objectDataType>
    students & student ===> returns corresponding datatype

`Mutation type`
- Query type defines entry points for <read operations>
- Mutation type defines entry points for <write operations>


`Subscription type`
- special object types ===> provide hierarchical data as arguments to fields
------------------------------------------------------------------------

A mutation that enables a user to "like" a blog post 
- might increment the likes count for a Post 
- update the likedPosts list for the User
- what should be the mutation response then
- use MutationResponse in such cases
------------------------------------------------------------------------

allowBatchedHttpRequests: true
[
    { "query": "query { students { firstName, lastName, gender } }"},
    { "query": "query student(firstName12: "Mohan") { firstName, gender }" }
]


Caching (static)
- @cacheControl directive
- maxAge, 

Caching (dynamic)
- info.cacheControl.setCacheHint
