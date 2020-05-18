import { User } from './models/User'

const user = new User({ name: 'John', age: 25 });

user.on('change', () => { });
user.on('change', () => { });
user.on('click', () => { });
console.log(user)
