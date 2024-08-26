import path from "path";
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
 
const typedefsArray = loadFilesSync(path.join(process.cwd(), 'index15_schemas', 'typedefs23'));
const resolversArray = loadFilesSync(path.join(process.cwd(), 'index15_schemas', 'resolvers23'));

const typeDefs23 = mergeTypeDefs(typedefsArray)
const resolvers23 = mergeResolvers(resolversArray)

export { typeDefs23, resolvers23 }
    
