import { User } from './models/User';

const user = new User({ id: 1, name: 'Newwer', age: 0 })

user.save()

user.events.on('save', () => {
  console.log('Save was triggered', user.attributes.get('name'))
});
