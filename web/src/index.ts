import { User } from './models/User'

const user = new User({ name: 'John', age: 25 });

user.on('change', () => { console.log('change 1') });
user.on('change', () => { console.log('change 2') });
user.on('click', () => { console.log('click') });
console.log(user)

user.trigger('change');
user.trigger('click');
