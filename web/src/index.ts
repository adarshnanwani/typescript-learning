import { User } from './models/User';

const user = User.buildUser({ age: 20 });

console.log(user.get('age'))

user.set({ name: 'Ady' })

console.log(user.get('name'))

console.log(user)
