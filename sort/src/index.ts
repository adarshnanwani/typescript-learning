import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';


const numbersCollection = new NumbersCollection([10, 3, - 5, 0]);
const charactersCollection = new CharactersCollection("adarsh");
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const strSorter = new Sorter(charactersCollection);
strSorter.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(3);
linkedList.add(-5);
linkedList.add(0);
const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();
