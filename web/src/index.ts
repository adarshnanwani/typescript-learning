import { User } from './models/User'

const user = new User({ name: 'John', age: 25 });
console.log(user.get('name'))
console.log(user.get('age'))
