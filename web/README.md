# Instructions

- Add a build folder in the root directory
- Run this command to install dependencies: `npm install`
- Run this command to run the project: `npm start`

## Topics covered

- Optional Props
- type alias e.g. `type Callback = () => void`
- Eventing system
- Generic classes
- Type assertions

  ```javascript
  get(propName: string): (string | number)
  const id = attrs.get('id') as number
  ```

- The below code means if T is an object then only the properties of T (denoted by K) will be allowed as an argument in the get method

  ```javascript
    export class Attributes<T> {
      constructor(private data: T) { }

      get<K extends keyof T>(key: K): T[K] {
        return this.data[key];
      }
    }
  ```

- Composition with getters (by passing a reference inside it)
- Bound functions (Arrow functions)
- Working with collections
