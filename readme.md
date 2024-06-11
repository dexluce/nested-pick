# nested-pick

`nested-pick` is a utility function for deeply picking properties from objects, allowing developers to extract specific parts of an object by specifying the desired structure.

## Installation

To install `nested-pick`, run the following command in your project directory:

```bash
npm install nested-pick
```

## Usage

Import `nested-pick` into your project and use it to extract properties from objects:

```javascript
import { nestedPick } from 'nested-pick';

const object = {
  user: {
    id: 1,
    name: {
      first: 'John',
      last: 'Doe'
    },
    contact: {
      email: 'john.doe@example.com',
      phone: '123-456-7890'
    }
  }
};

const result = nestedPick(object, 'user.name.first, user.contact.email');
console.log(result);
// Output: { user: { name: { first: 'John' }, contact: { email: 'john.doe@example.com' } } }
```

## Features

- **Deep Picking**: Recursively select properties from nested objects.
- **Flexible Queries**: Use a simple, readable syntax to specify which properties to extract.

## License

`nested-pick` is ISC licensed
