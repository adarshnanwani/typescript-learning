import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

const collection = new Collection(
  'http://localhost:3000/users',
  (json: UserProps): User => { return User.buildUser(json) }
);


collection.on('change', () => {
  console.log(collection);
})

collection.fetch();


