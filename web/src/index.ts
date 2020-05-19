import { User } from './models/User';

const user = new User({ name: 'New Record', age: 25 })


user.save();

user.events.on('change', () => {
  console.log('Change');
});

user.events.trigger('change');
