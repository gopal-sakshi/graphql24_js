// const { DataStore } = require('notarealdb');
// const store = new DataStore('./db23');

import { DataStore } from 'notarealdb';
const store = new DataStore('db23');
// console.log(store.collection('students'));
export default {
   students: store.collection('students'),
   colleges:store.collection('colleges')
};