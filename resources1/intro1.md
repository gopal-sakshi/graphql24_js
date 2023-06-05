# GraphQL
- open source server-side technology
- developed by Facebook
- to optimize RESTful API calls
- strongly typed language

`RESTful APIs`
- Sometimes it is not possible to fetch data with a single request.
- Say you have studentObject with these attributes
    id, firstName, lastName, collegeName
- Suppose you want only <id>, <firstname>
    you'll have write one endpoint              /api/v1/students/id
- Suppose you want whole studentObject
    you have to write another endpoint          /api/v1/students
- <GraphQL APIs> fetch all the data your application need in a <single request>



# GraphQL dependencies
graphql
graphql-tools
apollo-server-express@1

