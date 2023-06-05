`Scalar`
    primitive data types that can store a single value
    Int, Float, String, Boolean, ID 
------------------------------------------------------------------------------------

`Object`
- represents a group of fields. 
- Each field inside an object type maps to another type

type Query {
   stud_details:[Student]
}

type Student {
    stud_id:ID!                     // ! ===> non-nullable (it cant be null)
    firstname: String
    age: Int
    score:Float
}
------------------------------------------------------------------------------------

`Query`
    Entry point type to other specific types
    It is like requesting a resource in REST-based APIs

type Query {
    field1: data_type
    field2:data_type
    field2 (param1:data_type, param2:data_type) : data_type
}
------------------------------------------------------------------------------------

`Mutation`
    operations sent to the server to create, update, delete data.

type Mutation {
    field1: data_type
    field2(param1:data_type, param2:data_type) : data_type 
}
------------------------------------------------------------------------------------

`Enum`
    Useful in a situation where you need the user to pick from a prescribed list of options

type Days_of_Week{
    SUNDAY
    MONDAY
    TUESDAY
    WEDNESDAY
    THURSDAY
    FRIDAY
    SATURDAY
}
------------------------------------------------------------------------------------

List Type
    represent an array of values of specific type
type Query {
    todos: [String]
}

