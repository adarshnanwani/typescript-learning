import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';


const numbersCollection = new NumbersCollection([10, 3, - 5, 0]);
numbersCollection.sort();
console.log('With abstract', numbersCollection.data);

const charactersCollection = new CharactersCollection("adarsh");
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(3);
linkedList.add(-5);
linkedList.add(0);
linkedList.sort();
linkedList.print();
